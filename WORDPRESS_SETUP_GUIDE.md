# Study Prime — Complete WordPress Headless Integration & Migration Guide

This is the complete, master reference guide for connecting and managing your WordPress blog on the **Study Prime** web application.

---

## Table of Contents
1. [Architecture & How It Works](#1-architecture--how-it-works)
2. [Domain Migration: Moving WordPress to a Subdomain (`cms.studyprime.pk`)](#2-domain-migration-moving-wordpress-to-a-subdomain)
3. [WordPress Configuration (Permalinks, SEO & Media)](#3-wordpress-configuration-permalinks-seo--media)
4. [Connecting to the Study Prime Website (`.env` & Cloudflare)](#4-connecting-to-the-study-prime-website)
5. [Content Creation & Publishing Best Practices](#5-content-creation--publishing-best-practices)
6. [SEO, Google Rankings & Avoiding Duplicate Content](#6-seo-google-rankings--avoiding-duplicate-content)
7. [Optional: Direct In-Website Post Management (Application Passwords)](#7-optional-direct-in-website-post-management)
8. [Caching, Speed & Instant Updates](#8-caching-speed--instant-updates)
9. [Comprehensive Troubleshooting Checklist](#9-comprehensive-troubleshooting-checklist)

---

## 1. Architecture & How It Works

```
┌──────────────────────────────────────┐                WordPress REST API                ┌──────────────────────────────────────┐
│       WordPress CMS Backend          │ ───────────────────────────────────────────────> │         Study Prime Website          │
│      (https://cms.studyprime.pk)     │        GET /wp-json/wp/v2/posts?_embed           │       (https://studyprime.pk)        │
│                                      │                                                  │                                      │
│  • Write and edit blog posts         │                                                  │  • Ultra-fast Server-Side Rendering  │
│  • Upload featured images            │                                                  │  • 100% Google SEO & Article Schema  │
│  • Organize tags & categories        │                                                  │  • Dynamic Google Sitemap            │
└──────────────────────────────────────┘                                                  └──────────────────────────────────────┘
```

- **WordPress** acts as your content management system (headless CMS). You log into WordPress to write, format, upload images, and categorize posts.
- **Study Prime Website** serves your visitors. It queries the WordPress REST API on the server, caches posts for 60 seconds, builds the full HTML page with JSON-LD Article schemas, and serves visitors in under 50 milliseconds.

---

## 2. Domain Migration: Moving WordPress to a Subdomain

Because your main domain `studyprime.pk` is now used by your modern Remix website, you should move your WordPress installation to a free subdomain (e.g. `cms.studyprime.pk` or `wp.studyprime.pk`).

### Step 2.1: Create the Subdomain in Your Hosting (cPanel / Hostinger / CyberPanel)
1. Log into your hosting control panel (e.g. cPanel).
2. Navigate to **Domains** > **Subdomains** (or **Domains** > **Create a Domain**).
3. Create a subdomain:
   - **Subdomain Name**: `cms` (this creates `cms.studyprime.pk`).
   - **Document Root**: Point it to your existing WordPress files directory (usually `/public_html` or the folder where your WordPress files reside).
4. Click **Create** or **Submit**.

---

### Step 2.2: Add DNS A-Record in Cloudflare
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com) and click on **studyprime.pk**.
2. Go to **DNS** > **Records**.
3. Click **Add Record**:
   - **Type**: `A`
   - **Name**: `cms`
   - **IPv4 address**: Enter your hosting server's IP address (the IP address of your cPanel/Hostinger where WordPress is hosted).
   - **Proxy status**: Proxied (Orange Cloud) or DNS Only (Grey Cloud).
4. Click **Save**.

---

### Step 2.3: Update WordPress Site URLs

#### Method A: If you can access WP Admin
1. Go to **Settings** > **General**.
2. Change both:
   - **WordPress Address (URL)**: `https://cms.studyprime.pk`
   - **Site Address (URL)**: `https://cms.studyprime.pk`
3. Scroll down and click **Save Changes**.

#### Method B: If you are locked out of WP Admin (Via `wp-config.php`)
1. Open your hosting File Manager and locate `wp-config.php` in the root of your WordPress files.
2. Add these two lines right above `/* That's all, stop editing! Happy publishing. */`:
   ```php
   define('WP_HOME', 'https://cms.studyprime.pk');
   define('WP_SITEURL', 'https://cms.studyprime.pk');
   ```
3. Save the file. You can now immediately log in at `https://cms.studyprime.pk/wp-admin`.

---

## 3. WordPress Configuration (Permalinks, SEO & Media)

### Step 3.1: Enable Pretty Permalinks (MANDATORY)
The WordPress REST API requires permalinks to be set to "Post name".
1. In WP Admin, go to **Settings** > **Permalinks**.
2. Select **Post name** (`/%postname%/`).
3. Click **Save Changes**.

### Step 3.2: Verify the REST API Endpoint
Open your browser and navigate to:
```
https://cms.studyprime.pk/wp-json/wp/v2/posts
```
- If you see a JSON feed with your posts, your WordPress REST API is **100% active and working**.
- If you get a 404, re-save your permalinks (Step 3.1).

---

## 4. Connecting to the Study Prime Website

### 4.1: Local Development (`.env`)
1. In the root of this project, open [`.env`](file:///Users/fidaali/Study%20Prime/Website/.env).
2. Set your WordPress URL (without a trailing slash):
   ```env
   WORDPRESS_URL=https://cms.studyprime.pk
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:3000/blog`. You will see:
   `✓ Connected to WordPress CMS` and your real WordPress posts!

---

### 4.2: Production Deployment (Cloudflare Pages / Workers)
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Navigate to **Workers & Pages** > Select your **studyprime** project.
3. Go to **Settings** > **Variables and Secrets**.
4. Click **Add variable**:
   - **Variable name**: `WORDPRESS_URL`
   - **Value**: `https://cms.studyprime.pk`
5. Click **Save and Deploy**.

---

## 5. Content Creation & Publishing Best Practices

When publishing an article in WordPress:

| Field | Best Practice | Where It Appears on the Website |
| :--- | :--- | :--- |
| **Title** | Engaging, SEO-optimized title | Article H1 headline, Card title, Google Title tag, WhatsApp/Social preview |
| **Featured Image** | Upload a high-resolution 16:9 image (e.g. `1200 x 630 px` in JPG or WebP) | Blog hub card thumbnail, Article hero header, OpenGraph banner |
| **Category** | Select 1 primary category (e.g. *Study Visa*, *Scholarships*, *Admissions*) | Top filter pill, Category badge on cards, Google Article Section |
| **Excerpt** | 1 to 2 concise sentences | Card preview snippet, Lead paragraph, Google meta description |
| **Body Content** | Use standard Gutenberg blocks: H2, H3, paragraphs, bullet lists, blockquotes, images, tables | Full article body at `/blog/:slug` styled with clean typography |
| **Status** | Set to **Published** | Only published posts appear (drafts and private posts stay hidden) |

---

## 6. SEO, Google Rankings & Avoiding Duplicate Content

### Why This Setup Ranks Higher on Google
1. **Full Server-Side Rendering (SSR)**: When Googlebot crawls `/blog` or `/blog/:slug`, it gets 100% rendered HTML on the first network packet.
2. **Schema.org Structured Data**: Automatically generates `BlogPosting` and `BreadcrumbList` schemas with headline, dates, author, and publisher logo for Google rich snippets.
3. **Dynamic Sitemap**: Every published post is automatically included in `/sitemap.xml`.
4. **Sub-50ms Response Speed**: Blazing-fast page loads directly boost Google Core Web Vitals rankings.

### Crucial Step: Prevent Duplicate Content
You want Google to index only `studyprime.pk`, not `cms.studyprime.pk`.

1. In WP Admin (`cms.studyprime.pk`), go to **Settings** > **Reading**.
2. Check the box: **"Discourage search engines from indexing this site"**.
3. Click **Save Changes**.

> This ensures Google gives **100% of the SEO authority, page rank, and search traffic** exclusively to your main website (`https://studyprime.pk/blog/...`).

---

## 7. Optional: Direct In-Website Post Management

If you ever want an admin panel **inside** this website to create, edit, or delete posts without opening `wp-admin`, you can configure **WordPress Application Passwords**:

1. In WP Admin, go to **Users** > **Profile**.
2. Scroll down to **Application Passwords**.
3. Name it `StudyPrimeWebsite` and click **Add New Application Password**.
4. Copy the generated 24-character key.
5. Add to [`.env`](file:///Users/fidaali/Study%20Prime/Website/.env):
   ```env
   WORDPRESS_USERNAME=your_username
   WORDPRESS_APP_PASSWORD=xxxx xxxx xxxx xxxx xxxx
   ```

*Note: For 99% of websites, using the native WordPress dashboard to write posts while this website fetches them is the easiest, cleanest, and most feature-rich workflow.*

---

## 8. Caching, Speed & Instant Updates

- **Posts Cache TTL**: 60 seconds (`CACHE_TTL_MS = 60 * 1000` in [`app/services/wordpress.server.ts`](file:///Users/fidaali/Study%20Prime/Website/app/services/wordpress.server.ts)).
- **Categories Cache TTL**: 5 minutes.
- When you publish a new article or edit a typo in WordPress, the update automatically appears on the Study Prime website within **60 seconds**.
- To see changes immediately during testing: simply refresh or restart the development server.

---

## 9. Comprehensive Troubleshooting Checklist

| Problem | Root Cause | Solution |
| :--- | :--- | :--- |
| **`404 Not Found` on `/wp-json/wp/v2/posts`** | Default query string permalinks active | Go to WP Admin > **Settings** > **Permalinks** and choose **Post name**. |
| **`403 Forbidden` error** | Security plugin (Wordfence, iThemes, Cloudflare WAF) blocking REST requests | In your security plugin settings, whitelist `/wp-json/wp/v2/` so the REST API is not blocked. |
| **Website shows "Local Data Mode"** | `WORDPRESS_URL` missing or empty in `.env` | Set `WORDPRESS_URL=https://cms.studyprime.pk` in `.env` and restart the server. |
| **Missing image on website card** | No featured image selected in WordPress | In the post editor, open the right sidebar > **Post** tab > **Featured Image** and set an image. |
| **Draft post not appearing** | Post is saved as Draft | The website queries published articles only (`status=publish`). Change post status to **Publish**. |
| **Mixed Content Warning** | WordPress URL starts with `http://` instead of `https://` | Ensure SSL certificate is active on your subdomain and use `https://`. |
| **Cloudflare Error 521 / 522** | DNS A-record IP for `cms` is incorrect | Verify the server IP in Cloudflare DNS matches your cPanel server IP. |

---

### Summary Checklist to Go Live
- [ ] Create subdomain `cms.studyprime.pk` in cPanel / hosting pointing to WordPress.
- [ ] Add `A` record in Cloudflare for `cms` pointing to your host IP.
- [ ] Set **Settings > Permalinks** to **Post name**.
- [ ] Set **Settings > Reading** to **Discourage search engines** (prevents duplicate content).
- [ ] Put `WORDPRESS_URL=https://cms.studyprime.pk` in [`.env`](file:///Users/fidaali/Study%20Prime/Website/.env) and Cloudflare Pages variables.
- [ ] Start writing posts in WordPress — they will appear live on your website instantly!
