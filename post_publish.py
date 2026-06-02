#!/usr/bin/env python3
"""
Post-Publish Checklist Script
Run after publishing new content to Qlavo's site or Substack.
Handles: IndexNow submission, verification, and tracking.
"""
import sys
import os
import json
import urllib.request
import urllib.error
import re
import time

HOST = "qlavo.in"

def get_key():
    key_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "indexnow-key.txt")
    with open(key_file) as f:
        return f.read().strip()

def submit_indexnow(urls):
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
            print(f"✅ IndexNow: HTTP {resp.status} — {len(urls)} URLs submitted")
            return True
    except urllib.error.HTTPError as e:
        body = e.read().decode() if e.fp else ""
        print(f"❌ IndexNow error: HTTP {e.code} — {body}")
        return False
    except Exception as e:
        print(f"❌ IndexNow error: {e}")
        return False

def check_indexed(url):
    """Quick check if a URL appears in Bing's index"""
    check_url = f"https://www.bing.com/search?q=site:{url}"
    # Just report it — actual check requires browser
    print(f"🔍 Check Bing index: {url}")

def verify_live(url):
    """Verify the page is live and returns 200"""
    try:
        with urllib.request.urlopen(url, timeout=10) as resp:
            print(f"✅ Live: HTTP {resp.status} — {url}")
            return True
    except Exception as e:
        print(f"❌ Not live: {url} — {e}")
        return False

def check_llms_txt():
    """Verify llms.txt is accessible"""
    try:
        with urllib.request.urlopen(f"https://{HOST}/llms.txt", timeout=10) as resp:
            content = resp.read().decode()
            lines = content.strip().split('\n')
            url_count = sum(1 for l in lines if l.strip().startswith('- [') and 'https://' in l)
            print(f"✅ llms.txt: {resp.status} — {url_count} URLs listed")
            return True
    except Exception as e:
        print(f"❌ llms.txt: {e}")
        return False

if __name__ == "__main__":
    print("=" * 50)
    print("📋 Qlavo Post-Publish Checklist")
    print("=" * 50)
    
    # Step 1: Verify pages are live
    urls = sys.argv[1:] if len(sys.argv) > 1 else []
    if not urls:
        print("\nUsage: python3 post_publish.py <url1> [url2] ...")
        print("   Or: python3 post_publish.py --check  (run infrastructure checks)")
        print("   Or: python3 post_publish.py --all    (submit all sitemap + check)\n")
        
        # Infrastructure check mode
        print("🔍 Running infrastructure checks...")
        check_llms_txt()
        
        key_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), "indexnow-key.txt")
        key = get_key()
        print(f"✅ IndexNow key: {key[:8]}... (file at https://{HOST}/{key}.txt)")
        
        # Check key file
        try:
            with urllib.request.urlopen(f"https://{HOST}/{key}.txt", timeout=10) as resp:
                print(f"✅ IndexNow key file: HTTP {resp.status} — accessible at domain root")
        except:
            print(f"❌ IndexNow key file not accessible")
        
        print("\n📋 Remaining to do:")
        print("  □ Sign in to Bing Webmaster Tools: https://www.bing.com/webmaster/home/dashboard")
        print("  □ Add & verify qlavo.in site ownership")
        print("  □ Set up HARO/Connectively alerts for 'GEO', 'AI search', 'generative engine'")
        print("  □ Run weekly prompt audit and log in competitor-tracker-template.md")
        sys.exit(0)
    
    if "--all" in sys.argv:
        # Fetch sitemap URLs
        try:
            with urllib.request.urlopen(f"https://{HOST}/sitemap.xml", timeout=15) as resp:
                content = resp.read().decode()
                urls = re.findall(r'<loc>(.*?)</loc>', content)
        except Exception as e:
            print(f"❌ Sitemap fetch failed: {e}")
            urls = []
    else:
        urls = [u if u.startswith("http") else f"https://{HOST}{u}" for u in urls if u != "--all"]
    
    print(f"\n📤 Submitting {len(urls)} URLs to IndexNow...")
    submit_indexnow(urls)
