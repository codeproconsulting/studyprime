# Study Prime — Free Assessment & Lead Capture Integration Guide

This guide explains how to automatically receive student consultation bookings and free profile assessment entries directly into **Google Sheets** (Recommended) or your **WordPress CMS Dashboard** (`cms.studyprime.pk`).

---

## Table of Contents
1. [Overview: How Leads Flow](#1-overview-how-leads-flow)
2. [Option 1: Google Sheets Integration (Free & 5-Minute Setup)](#2-option-1-google-sheets-integration-recommended)
3. [Option 2: WordPress Admin Dashboard Integration](#3-option-2-wordpress-admin-dashboard-integration)
4. [Option 3: WhatsApp Instant Notification (Built-In & Ready)](#4-option-3-whatsapp-instant-notification-built-in)
5. [Field Mapping Reference](#5-field-mapping-reference)

---

## 1. Overview: How Leads Flow

When a student finishes the 3-step assessment on `https://studyprime.pk/assessment`:

```
┌──────────────────────────────────────┐
│       Student on Study Prime         │
│     (Chooses Phone/Video/Office)     │
│   (Fills 3-Step Profile Form)        │
└──────────────────┬───────────────────┘
                   │  POST
                   ▼
┌──────────────────────────────────────┐
│      Study Prime Remix Server        │
│        (Cloudflare Worker)           │
└──────────┬───────────────────────┬───┘
           │                       │
           │ (If configured)       │ (If configured)
           ▼                       ▼
┌──────────────────────┐ ┌───────────────────────────┐
│     Google Sheets    │ │    WordPress Dashboard    │
│  Real-Time New Row   │ │  (cms.studyprime.pk/admin)│
└──────────────────────┘ └───────────────────────────┘
           │
           │ (Also student gets 1-click button)
           ▼
┌──────────────────────────────────────┐
│       Instant WhatsApp Message       │
│    To Counselor: +92 310 1193888     │
└──────────────────────────────────────┘
```

---

## 2. Option 1: Google Sheets Integration (Recommended)

Google Sheets is the most convenient tool for admissions teams. It allows counselors to filter by country, assign leads, add status notes (e.g. *Called*, *Interested*, *Documents Received*), and access entries from the Google Sheets mobile app.

### Step 2.1: Create Your Google Sheet
1. Open [Google Sheets](https://sheets.new) in your browser.
2. Title your spreadsheet: **Study Prime - Assessment Leads**.
3. In **Row 1**, paste these exact column headers across columns **A to T**:

| Col | Header Name |
| :--- | :--- |
| **A** | Timestamp |
| **B** | Booking Ref |
| **C** | Consultation Mode |
| **D** | Appointment Date |
| **E** | Time Slot |
| **F** | Full Name |
| **G** | Phone / WhatsApp |
| **H** | Email Address |
| **I** | City |
| **J** | Highest Qualification |
| **K** | Major / Field |
| **L** | CGPA / Grades |
| **M** | Passing Year |
| **N** | Target Country |
| **O** | Target Degree |
| **P** | Target Intake |
| **Q** | English Test Status |
| **R** | Previous Visa Refusal |
| **S** | Study Gap |
| **T** | Notes & Inquiries |

---

### Step 2.2: Add the Google Apps Script Webhook
1. In the top menu of your Google Sheet, click **Extensions** > **Apps Script**.
2. Delete whatever is in the script editor (`function myFunction() { ... }`).
3. Paste the following complete script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Format timestamp
    var timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" });
    
    // Append row
    sheet.appendRow([
      timestamp,
      data.bookingRef || "SP-LEAD",
      data.consultationMode || "phone",
      data.selectedDate || "",
      data.selectedTimeSlot || "",
      data.fullName || "",
      data.phone ? "+92 " + data.phone : "",
      data.email || "",
      data.city || "",
      data.currentEducation || "",
      data.majorSubject || "",
      data.gradeScore || "",
      data.passingYear || "",
      data.targetCountry || "",
      data.targetDegree || "",
      data.targetIntake || "",
      data.englishTest || "",
      data.hasRefusal || "no",
      data.studyGap || "no",
      data.notes || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (disk icon) or press `Ctrl + S` / `Cmd + S`.

---

### Step 2.3: Deploy as a Web App
1. In the top right corner of the Apps Script editor, click **Deploy** > **New deployment**.
2. Click the gear icon (`Select type`) and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `Study Prime Lead Forwarder`
   - **Execute as**: `Me (your google account)`
   - **Who has access**: **`Anyone`** *(Crucial: must be set to Anyone so the website server can submit leads)*.
4. Click **Deploy**.
5. When prompted, click **Authorize access**, choose your Google account, click **Advanced**, and click **Go to Untitled project (unsafe)** to allow the script to append rows to your sheet.
6. Copy the **Web App URL**. It looks like:
   ```
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

---

### Step 2.4: Save the Webhook URL in Your Project
1. Open your local `.env` file and add:
   ```env
   GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec
   ```
2. For Cloudflare production deployment, set the secret by running:
   ```bash
   npx wrangler secret put GOOGLE_SHEET_WEBHOOK_URL
   ```
   Paste the Google Apps Script Web App URL when prompted.

That's it! Every new consultation booking will now instantly show up as a new row in your Google Sheet.

---

## 3. Option 2: WordPress Admin Dashboard Integration

If you prefer to see student leads in your WordPress admin menu at `https://cms.studyprime.pk/wp-admin/`, you can use a custom REST endpoint.

### Method: Add a Custom "Leads" Post Type via `functions.php`
1. Log into your WordPress admin at `https://cms.studyprime.pk/wp-admin/`.
2. Go to **Appearance** > **Theme File Editor** (or use the **WPCode** plugin > **Add Snippet**).
3. Add this snippet to your active theme's `functions.php`:

```php
// 1. Register "Student Leads" Post Type in WP Admin
add_action('init', function() {
    register_post_type('student_lead', array(
        'labels' => array(
            'name' => 'Student Leads',
            'singular_name' => 'Student Lead',
            'menu_name' => 'Consultation Leads',
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_icon' => 'dashicons-id-alt',
        'supports' => array('title', 'editor', 'custom-fields'),
    ));
});

// 2. Register REST API Endpoint to Receive Leads from Remix
add_action('rest_api_init', function () {
    register_rest_route('studyprime/v1', '/lead', array(
        'methods' => 'POST',
        'permission_callback' => '__return_true',
        'callback' => function (WP_REST_Request $request) {
            $params = $request->get_json_params();
            if (empty($params)) {
                $params = $request->get_params();
            }

            $name = sanitize_text_field($params['fullName'] ?? 'Student Lead');
            $ref = sanitize_text_field($params['bookingRef'] ?? 'SP-LEAD');
            $mode = sanitize_text_field($params['consultationMode'] ?? 'phone');
            $date = sanitize_text_field($params['selectedDate'] ?? '');
            $time = sanitize_text_field($params['selectedTimeSlot'] ?? '');
            $country = sanitize_text_field($params['targetCountry'] ?? '');

            // Create lead post
            $post_id = wp_insert_post(array(
                'post_type' => 'student_lead',
                'post_title' => $name . ' (' . $country . ') - ' . $ref,
                'post_status' => 'publish',
                'post_content' => sprintf(
                    "Booking Ref: %s\nMode: %s\nDate: %s at %s\nPhone: +92 %s\nEmail: %s\nCity: %s\nQualification: %s (%s, %s)\nTarget: %s (%s - %s)\nEnglish Test: %s\nRefusals: %s\nGap: %s\nNotes: %s",
                    $ref,
                    $mode,
                    $date,
                    $time,
                    sanitize_text_field($params['phone'] ?? ''),
                    sanitize_email($params['email'] ?? ''),
                    sanitize_text_field($params['city'] ?? ''),
                    sanitize_text_field($params['currentEducation'] ?? ''),
                    sanitize_text_field($params['majorSubject'] ?? ''),
                    sanitize_text_field($params['gradeScore'] ?? ''),
                    $country,
                    sanitize_text_field($params['targetDegree'] ?? ''),
                    sanitize_text_field($params['targetIntake'] ?? ''),
                    sanitize_text_field($params['englishTest'] ?? ''),
                    sanitize_text_field($params['hasRefusal'] ?? 'no'),
                    sanitize_text_field($params['studyGap'] ?? 'no'),
                    sanitize_textarea_field($params['notes'] ?? '')
                ),
            ));

            if (is_wp_error($post_id)) {
                return new WP_Error('lead_failed', 'Could not save lead', array('status' => 500));
            }

            return new WP_REST_Response(array('success' => true, 'post_id' => $post_id), 200);
        }
    ));
});
```

4. Now, in your `.env` file or Cloudflare secrets, add:
   ```env
   WORDPRESS_LEAD_WEBHOOK_URL=https://cms.studyprime.pk/wp-json/studyprime/v1/lead
   ```
5. All new bookings will now show up under the **"Consultation Leads"** tab on your WordPress sidebar!

---

## 4. Option 3: WhatsApp Instant Notification (Built-In)

Even if neither Google Sheets nor WordPress webhook is set up yet:
1. When any student completes the booking, the confirmation screen immediately generates an **Instant WhatsApp Confirmation** button.
2. Clicking it opens WhatsApp directly with Study Prime's counselor hotline (`+92 310 1193888`).
3. The message is **pre-populated with the student's complete academic background, target destination, selected phone consultation slot, and booking reference number**.
4. The counselor can reply with a single tap to lock the booking in their phone.

---

## 5. Field Mapping Reference

| Field Name | Description | Example Values |
| :--- | :--- | :--- |
| `bookingRef` | Unique booking identifier | `SP-783921` |
| `consultationMode` | Preferred appointment type | `phone`, `virtual`, `office` |
| `selectedDate` | Appointment date | `Tue, Sep 15, 2026` |
| `selectedTimeSlot` | Appointment time slot | `03:00 PM` |
| `fullName` | Student's full name | `Muhammad Hamza` |
| `phone` | Mobile/WhatsApp number | `3001234567` |
| `email` | Email address | `hamza@example.com` |
| `city` | Student's city | `Islamabad` |
| `currentEducation` | Highest qualification | `bachelor`, `inter_alevel`, `master` |
| `majorSubject` | Academic subject | `Computer Science` |
| `gradeScore` | CGPA or % | `3.4 CGPA` or `82%` |
| `passingYear` | Completion year | `2024` |
| `targetCountry` | Destination country | `United Kingdom`, `Australia`, `Canada`, etc. |
| `targetDegree` | Degree level | `master`, `bachelor`, `topup`, `phd` |
| `targetIntake` | Intake session | `September / Fall 2026` |
| `englishTest` | English test status | `ielts_academic`, `pte_academic`, `none_yet` |
| `hasRefusal` | Prior visa refusal history | `no`, `uk_refusal`, `canada_refusal` |
| `studyGap` | Academic gap | `no`, `1_2_years`, `3_5_years` |
| `notes` | Specific questions | *Wants 50% scholarship in Manchester* |
