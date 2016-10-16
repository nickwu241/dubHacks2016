import io
import json
import argparse

from yelp.client import Client
from yelp.oauth1_authenticator import Oauth1Authenticator

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("output_filename", help="do not include extension (always .json)")
    args = parser.parse_args()

    # read API keys
    with io.open('config_secret.json') as cred:
        creds = json.load(cred)
        auth = Oauth1Authenticator(**creds)
        client = Client(auth)

    params = {
        'term': 'food',
        'sort': '2'
    }

    response = client.search('Richmond', **params)
    compactJson = []
    formats = ("id", "name", "rating")
    for bus in response.businesses:
        compacted = {}
        for format in formats:
            compacted[format] = getattr(bus, format)
        compacted["latitude"] = bus.location.coordinate.latitude
        compacted["longitude"] = bus.location.coordinate.longitude
        compactJson.append(compacted)

    jsonDump = json.dumps(compactJson, ensure_ascii=False, sort_keys=True, indent=4)
    with open(args.output_filename + ".json", "w") as f:
        f.write(jsonDump)

if __name__ == "__main__":
    main()
