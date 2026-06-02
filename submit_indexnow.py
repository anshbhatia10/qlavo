#!/usr/bin/env python3
"""
IndexNow URL Submission Script
Use after publishing new content to Qlavo's site.
Cuts ChatGPT/Bing citation time from 1-4 weeks to 3-7 days.

Usage:
  python3 submit_indexnow.py <url1> [url2] [url3] ...
  python3 submit_indexnow.py --all    # Submit all sitemap URLs
"""
import sys
import json
import urllib.request
import urllib.error
import re
import os

HOST = "qlavo.in"

def get_key():
    """Read the IndexNow API key from the saved file"""
    key_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "indexnow-key.txt")
    with open(key_file) as f:
        return f.read().strip()

def submit_urls(urls):
    """Submit URLs to IndexNow (hits Bing, Yandex, Seznam, etc.)"""
    key = get_key()
    payload = {
        "host": HOST,
        "key": key,
        "keyLocation": f"https://{HOST}/{key}.txt",
        "urlList": urls
    }
    
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        "https://www.bing.com/IndexNow",
        data=data,
        headers={"Content-Type": "application/json; charset=utf-8"}
    )
    
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            body = resp.read().decode()
            print(f"✅ IndexNow: {len(urls)} URLs submitted — HTTP {resp.status}")
            print(f"   Response: {body}")
            return True
    except urllib.error.HTTPError as e:
        body = e.read().decode() if e.fp else ""
        print(f"❌ IndexNow error: HTTP {e.code} — {body}")
        return False
    except Exception as e:
        print(f"❌ IndexNow error: {e}")
        return False

def get_sitemap_urls():
    """Fetch all URLs from the sitemap (optional)"""
    sitemap_url = f"https://{HOST}/sitemap.xml"
    try:
        with urllib.request.urlopen(sitemap_url, timeout=15) as resp:
            content = resp.read().decode()
            urls = re.findall(r'<loc>(.*?)</loc>', content)
            return urls
    except Exception as e:
        print(f"❌ Could not fetch sitemap: {e}")
        return []

if __name__ == "__main__":
    if "--all" in sys.argv:
        urls = get_sitemap_urls()
        if urls:
            for i in range(0, len(urls), 10):
                batch = urls[i:i+10]
                submit_urls(batch)
        else:
            print("No URLs found in sitemap")
    
    elif len(sys.argv) > 1:
        urls = [url if url.startswith("http") else f"https://{HOST}{url}" for url in sys.argv[1:]]
        submit_urls(urls)
    
    else:
        submit_urls([
            f"https://{HOST}/",
            f"https://{HOST}/what-is-generative-engine-optimization",
            f"https://{HOST}/geo-pricing-cost-guide-2026",
            f"https://{HOST}/geo-vs-seo-vs-aeo-differences",
            f"https://{HOST}/geo-statistics-2026",
            f"https://{HOST}/geo-agency-delhi-india",
            f"https://{HOST}/ai-visibility",
            f"https://{HOST}/geo-resources",
        ])
