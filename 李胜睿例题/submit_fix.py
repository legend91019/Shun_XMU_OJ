import json
import subprocess
import os

base_dir = r'D:\Desktop\新建文件夹\小学期OJ\李胜睿例题'

# Only resubmit the 5 broken ones
problems = [
    ('LinK40', 7503),
    ('LinK42', 7505),
    ('LinK43', 7506),
    ('LinK46', 7509),
    ('LinK47', 7510),
]

cookie = 'sessionid=w9huarcgaorlw6ooty8gsshsih0dyh5i;csrftoken=sx9rnsKFWBVr21KFfGPjJcRTZWF6owwhDfCVbu0eZeTStU4PpSggv9CCu88aFnxS'
csrf = 'sx9rnsKFWBVr21KFfGPjJcRTZWF6owwhDfCVbu0eZeTStU4PpSggv9CCu88aFnxS'

results = {}
for name, pid in problems:
    filepath = os.path.join(base_dir, name + '.cpp')
    with open(filepath, 'r', encoding='utf-8') as f:
        code = f.read()

    payload = json.dumps({
        'problem_id': pid,
        'display_id': name,
        'language': 'C++',
        'code': code,
        'contest_id': 362
    })

    result = subprocess.check_output([
        'curl', '-k', '-s', '-X', 'POST',
        'https://xmuoj.com/api/submission',
        '-H', 'Content-Type: application/json',
        '-H', 'X-CSRFTOKEN: ' + csrf,
        '-b', cookie,
        '-d', payload
    ])
    resp = json.loads(result)
    if resp['error'] is None:
        sid = resp['data']['submission_id']
        results[name] = sid
        print('%s: SUBMITTED (id: %s)' % (name, sid))
    else:
        print('%s: ERROR - %s' % (name, resp))

print('\n--- Results after waiting ---')
import time
time.sleep(4)

for name, sid in sorted(results.items()):
    result = subprocess.check_output([
        'curl', '-k', '-s', '-b', cookie,
        'https://xmuoj.com/api/submission?id=' + sid
    ])
    resp = json.loads(result)
    if resp['error'] is None:
        data = resp['data']
        rc = data['result']
        m = {-1:'WA', -2:'TLE', 0:'AC', 1:'RE', 2:'CE', 3:'WA', 4:'WA', 5:'OLE', 6:'MLE', 7:'WA', 8:'WA'}
        s = m.get(rc, '?'+str(rc))
        score = data.get('statistic_info', {}).get('score', '?')
        print('%s: %s (score: %s)' % (name, s, score))
    else:
        print('%s: QUERY ERROR' % name)
