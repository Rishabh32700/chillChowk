# Deploy Chill Chowk on Vercel

Option A (no coding):
1. Go to vercel.com and sign in with GitHub.
2. Create a new GitHub repo, upload all files in this folder, then in Vercel click "Add New → Project" and import that repo. Framework preset: "Other". Click Deploy.

Option B (terminal, 1 minute):
1. Install Node.js, open a terminal in this folder.
2. Run:  npx vercel --prod
3. Log in when asked, accept the defaults, name the project "chillchowk".

After deploying:
- If your URL is not https://chillchowk.vercel.app, change DOMAIN in build.py (or find-replace it in all files) so canonical links, sitemap and share images point to the right address.
- Add the site in Google Search Console and submit /sitemap.xml.
- Create a Google Business Profile for the café: for "cafe near me" searches it matters more than the website.
