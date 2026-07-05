import json, sys, os, subprocess, time

COOKIE_FILE = "D:/Desktop/新建文件夹/小学期OJ/cookies.txt"
CSRF_TOKEN = "xlbxF9QAPWrDqvaPcRVj0sXBzllCC6UiAd7kwDQTVvT5tqSR4LLUI9c0kgotauyQ"
SOLUTION_DIR = "D:/Desktop/新建文件夹/小学期OJ/李胜睿剑道试炼"
PROBLEMS_JSON = "C:/Users/15853/.claude/projects/D--Desktop----------OJ/504d22a3-a9d9-4c3f-a929-0897949e321b/tool-results/b0gxf1ilr.txt"

def submit(problem_id, code, language="C++"):
    import requests
    url = "https://xmuoj.com/api/submission"
    headers = {
        "Content-Type": "application/json",
        "X-CSRFToken": CSRF_TOKEN,
        "Referer": f"https://xmuoj.com/contest/357/problems"
    }
    data = {
        "problem_id": problem_id,
        "language": language,
        "contest_id": 357,
        "code": code
    }
    resp = requests.post(url, json=data, headers=headers, cookies=dict(sessionid="9gharydx7co7jp94qxvzga6zlle2nfx5", csrftoken=CSRF_TOKEN), verify=False)
    return resp.json()

def check_result(submission_id):
    import requests
    url = f"https://xmuoj.com/api/submission?id={submission_id}"
    headers = {"X-CSRFToken": CSRF_TOKEN}
    resp = requests.get(url, headers=headers, cookies=dict(sessionid="9gharydx7co7jp94qxvzga6zlle2nfx5", csrftoken=CSRF_TOKEN), verify=False)
    return resp.json()

def get_problem_map():
    with open(PROBLEMS_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return {p['_id']: p['id'] for p in data['data']}

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Usage: python submit.py <JD0XX file>")
        sys.exit(1)

    prob_map = get_problem_map()
    for arg in sys.argv[1:]:
        base = os.path.splitext(os.path.basename(arg))[0].upper()
        if base not in prob_map:
            print(f"Unknown problem: {base}")
            continue
        pid = prob_map[base]
        with open(arg, 'r', encoding='utf-8') as f:
            code = f.read()

        print(f"Submitting {base} (ID={pid})...")
        result = submit(pid, code)
        if result.get('error') is None:
            sub_id = result['data']['submission_id']
            print(f"  Submission ID: {sub_id}")

            # Wait and check
            time.sleep(2)
            check = check_result(sub_id)
            if check.get('error') is None:
                info = check['data'].get('statistic_info', {})
                score = info.get('score', '?')
                print(f"  Score: {score}")
        else:
            print(f"  Error: {result}")
