# bookmarklets
Bookmarklets written over the years

# Adding bookmarklets
1. Create a new bookmark
1. Provide a title
1. To let the browser know it is a script, in the address input, add `javascript:`
1. Paste the contents of the script you want as the bookmarklet

# Purposes

## delete reddit comments
Deletes reddit comments from history of your account. This is especially useful if you
participate in subreddits exposing potentially identifiable information. For instance,
posting on /r/financialindependence and saying things over time like "I'm in software"
and "moved to Seattle" and saying "vesting day!" got my workplace doxed to a subreddit
of 700,000+ people.

## treasury direct password
This was another "I was irked" bookmarklet. Treasury direct uses some pretty asinine 
security theater with their "virtual keyboard" which makes you click each letter of 
your password...but the password is just a `<input type="password" readOnly>` element.
Of course, when you put blockers in the way of developers they find a way around them.
Or as the Gov. of Missouri likes to call it, [hacking](https://www.washingtonpost.com/politics/2021/10/14/newspaper-informed-missouri-about-website-flaw-governor-accused-it-hacking/)!

Please check out the source code to ease your mind that it may copy your password. It
only enables the input element, asks your password, enters it for you, then hits the
submit button. No writing to anything, no HTTP requests, nothing.

## equity count
Schwab's user interface is broken down into grants, then each grant has a set of dates.
For the sake of my budgeting I wanted all the options & RSUs that would be vesting on a
given date...so pivoting the table. Unfortunately, they don't provide a way to do that.

# Usage

## delete reddit comments

1. Go to your user profile on old reddit https://old.reddit.com/user/yourusername/
1. Run the script

## treasury direct password

1. Go to [treasurydirect.gov](https://treasurydirect.gov/)
1. Click "Treasurydirect" in the Account login section
1. Click the LOGIN button
1. Provide your account number
1. Click the Submit button
1. Enter your OTP if applicable
1. Confirm your account (image/pass phrase matches what you gave treasury direct)
1. Run the script
1. Enter your password in the alert

## equity count

1. Log into Schwab
1. Click on equity awards in the account summary
1. Click on the "View Equity Details" in the top right corner of the "Equity Today" widget

