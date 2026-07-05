import json
import subprocess
import os

base_dir = r'D:\Desktop\新建文件夹\小学期OJ\李胜睿例题'

problems = [
    ('LinK38', 7501),
    ('LinK39', 7502),
    ('LinK40', 7503),
    ('LinK41', 7504),
    ('LinK42', 7505),
    ('LinK43', 7506),
    ('LinK44', 7507),
    ('LinK45', 7508),
    ('LinK46', 7509),
    ('LinK47', 7510),
]

cookie = 'sessionid=w9huarcgaorlw6ooty8gsshsih0dyh5i;csrftoken=sx9rnsKFWBVr21KFfGPjJcRTZWF6owwhDfCVbu0eZeTStU4PpSggv9CCu88aFnxS'
csrf = 'sx9rnsKFWBVr21KFfGPjJcRTZWF6owwhDfCVbu0eZeTStU4PpSggv9CCu88aFnxS'

for name, pid in problems:
    filepath = os.path.join(base_dir, name + '.cpp')
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            code = f.read()
    except Exception as e:
        print('%s: FAILED to read file - %s' % (name, e))
        continue

    payload = json.dumps({
        'problem_id': pid,
        'display_id': name,
        'language': 'C++',
        'code': code,
        'contest_id': 362
    })

    try:
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
            print('%s: SUBMITTED (id: %s)' % (name, sid))
        else:
            print('%s: ERROR - %s' % (name, resp))
    except Exception as e:
        print('%s: REQUEST FAILED - %s' % (name, e))
