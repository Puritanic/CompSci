(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{490:function(e,t,o){"use strict";o.r(t);var a=o(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("There is a consensus that code reviews are an essential aspect of highly effective teams. However, it's all too common to see code reviews that barely scratch the surface or offer feedback that is unclear or hard to act upon. This robs the team of the opportunity to speed up learning, share knowledge and context, and raise the quality bar on the resulting code.")]),e._v(" "),o("p",[e._v("Let's talk about how we can make it much better.")]),e._v(" "),o("h2",{attrs:{id:"keep-your-pull-requests-small"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#keep-your-pull-requests-small"}},[e._v("#")]),e._v(" Keep Your Pull Requests Small")]),e._v(" "),o("p",[e._v("As simple as this sounds, this is easily the most impactful technique you can follow to level up your code review workflow. There are two fundamental reasons why this works:")]),e._v(" "),o("ul",[o("li",[e._v("It's mentally more comfortable to start and complete a review for a small piece. Larger PRs will naturally make reviewers delay and procrastinate examining the work, and they are more likely to be interrupted mid-review.")]),e._v(" "),o("li",[e._v("As a reviewer, it's exponentially harder to dive deep if the PR is long. The more code there is to examine, the bigger the mental map we need to build to understand the whole piece. Breaking up your work in smaller chunks increases your chances of getting faster and more in-depth reviews.")])]),e._v(" "),o("p",[e._v("The guideline would be around 200-300 lines of code affected. If we go above this threshold, we should almost always break up the work into smaller blocks. Of course, we need to be careful about breaking up PRs into chunks that are too small since this means reviewers may need to inspect several PRs to understand the overall picture.")]),e._v(" "),o("h2",{attrs:{id:"use-draft-prs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-draft-prs"}},[e._v("#")]),e._v(" Use Draft PRs")]),e._v(" "),o("p",[e._v("It's common practice to use Work In Progress (WIP) PRs to elicit early feedback whose goal is validating direction (choice of algorithm, design, API, etc.). Early changes mean less wasted effort on details, polish, documentation, etc. As an author, this means you need to be open to changing the direction of your work.")]),e._v(" "),o("h2",{attrs:{id:"one-pr-per-concern"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-pr-per-concern"}},[e._v("#")]),e._v(" One PR Per Concern")]),e._v(" "),o("p",[e._v("In addition to line count, another dimension to consider is how many matters your unit of work is trying to address. A matter may be a feature, a bugfix, a dependency upgrade, an API change, etc. Are you introducing a new feature while refactoring at the same time? Fixing two bugs in one shot or introducing a library upgrade and a new service?")]),e._v(" "),o("p",[e._v("Breaking down PRs into individual concerns has the following effects:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("More independent review units")]),e._v(" and therefore better review quality")]),e._v(" "),o("li",[o("strong",[e._v("Fewer affected people")]),e._v(", therefore fewer domains of expertise to gather")]),e._v(" "),o("li",[o("strong",[e._v("Atomicity of rollbacks")]),e._v(", the ability to roll back a small commit or PR. This is valuable because if something goes wrong, it will be easier to identify where errors were introduced and what to roll back.")]),e._v(" "),o("li",[o("strong",[e._v("Separating easy stuff from hard stuff")]),e._v(". Imagine a new feature that requires refactoring a frequently used API. You change the API, update a dozen call-sites, and then implement your feature. 80% of your changes are apparent and skimmable with no functional changes. In comparison, 20% are new code that needs careful attention to test coverage, intended behavior, error handling, etc., and will likely go through multiple revisions. With each revision, the reviewer will need to skim through all the changes to find the relevant bits. By splitting this into two PRs, it becomes easy to quickly land most of the work and optimize the review effort applied to the more challenging work.")])]),e._v(" "),o("h2",{attrs:{id:"focus-on-the-code-not-the-person"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#focus-on-the-code-not-the-person"}},[e._v("#")]),e._v(" Focus on the Code, Not the Person")]),e._v(" "),o("p",[e._v("I know that almost all of us sometimes in our careers had a situation where you go into CR with low expectations and then realize that the situation is much worse and that the new code is a pile of garbage. When this happens, we should give our criticism in a non-biased way, focusing on the code and not on the person who wrote that code.")]),e._v(" "),o("p",[e._v("Focus on the code, not the person practice refers to communication styles and relationships between people. Fundamentally, it's about trying to make the product better and avoid the author perceiving a review as a personal criticism.")]),e._v(" "),o("p",[e._v("Here are some tips you can follow:")]),e._v(" "),o("ul",[o("li",[e._v("As a reviewer, think, "),o("em",[e._v("This is our code, how can we improve on it?")])]),e._v(" "),o("li",[e._v("Offer positive remarks! If you see something done well, comment on it. This reinforces good work and helps the author balance suggestions for improvement.")]),e._v(" "),o("li",[e._v("As an author, assume the best intention and don't take comments personally.")])]),e._v(" "),o("p",[e._v("Ultimately, a code review is a learning and teaching opportunity and should be celebrated as such.")]),e._v(" "),o("h2",{attrs:{id:"give-your-reviewers-introduction-to-changes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#give-your-reviewers-introduction-to-changes"}},[e._v("#")]),e._v(" Give Your Reviewers introduction to changes")]),e._v(" "),o("p",[e._v("Last but not least, the description of your PR is crucial. Depending on who you picked for review, different people will have a different context. The onus is on the author to help reviewers by providing essential information or links to more context to produce meaningful feedback.")]),e._v(" "),o("p",[e._v("Some questions you can include in your PR templates:")]),e._v(" "),o("ul",[o("li",[e._v("Why is this PR necessary?")]),e._v(" "),o("li",[e._v("Who benefits from this?")]),e._v(" "),o("li",[e._v("What could go wrong?")]),e._v(" "),o("li",[e._v("What other approaches did you consider? Why did you decide on this approach?")]),e._v(" "),o("li",[e._v("What other systems does this affect?")])]),e._v(" "),o("p",[e._v("Good code is not only bug-free; it is also useful! As an author, ensure that your PR description ties your code back to your team's objectives, ideally with a link to a feature or bug description in your backlog. As a reviewer, start with the PR description; if it's incomplete, send it back before attempting to judge the code's suitability against undefined objectives. And remember, sometimes the best outcome of a code review is to realize that the code isn't needed at all!")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"profit"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#profit"}},[e._v("#")]),e._v(" Profit?")]),e._v(" "),o("p",[e._v("By adopting some of the techniques above, you can substantially impact your software building process's speed and quality. But beyond that, there's the potential for a cultural effect:")]),e._v(" "),o("ul",[o("li",[e._v("Teams will build a common understanding. The group understands your work better, and you're not the only person capable of evolving any one area of the codebase.")]),e._v(" "),o("li",[e._v("Teams will adopt a sense of shared responsibility. If something breaks, it's not one person's code that needs fixing. It's the team's work that needs fixing.")]),e._v(" "),o("li",[e._v("Anyone person in a team should be able to take a holiday and disconnect from work for a number of days without risking the business or stressing about checking email to make sure the world didn't end.")])]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),o("ol",[o("li",[e._v("Shane McIntosh, Yasutaka Kamei, Bram Adams, Ahmed E. Hassan, An Empirical Study of the Impact of Modern Code Review Practices on Software Quality, "),o("a",{attrs:{href:"https://sail.cs.queensu.ca/Downloads/EMSE_AnEmpiricalStudyOfTheImpactOfModernCodeReviewPracticesOnSoftwareQuality.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("sail.cs.queensu.ca"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Alejandro Lujan Toro, Great Code Reviews - The Superpower Your Team Needs, 2020, "),o("a",{attrs:{href:"https://shopify.engineering/great-code-reviews",target:"_blank",rel:"noopener noreferrer"}},[e._v("shopify.engineering"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);