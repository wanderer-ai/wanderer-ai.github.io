(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{243:function(e,t,o){"use strict";o.r(t);var n=o(188),r=o(187),h=o(189),l={components:{AppNav:r.a,AppFooter:h.a,HeaderSection:n.a}},c=o(30),component=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("app-nav"),this._v(" "),t("header-section",{attrs:{colorFrom:"red-dark",colorTo:"red"}},[t("h1",{staticClass:"uppercase text-4xl md:text-6xl text-white mb-4"},[this._v("Frequently asked questions")])]),this._v(" "),this._m(0),this._v(" "),t("app-footer",{attrs:{colorFrom:"red-dark",colorTo:"red"}})],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container narrow content pt-24 pb-48"},[o("h2",[e._v("What is the current status of the project?")]),e._v(" "),o("p",[e._v("\n      The project is in an early stage of development (Public Alpha).\n      You can already use the bot builder to build and test your chatbots. You can also integrate it to your website. Feedback is welcome.\n    ")]),e._v(" "),o("h2",[e._v("The chatbot is reactive and non blocking. What does that mean?")]),e._v(" "),o("p",[e._v("\n      Thanks to this kind of technology the graph don't have to wait for user input to generate new conclusions.\n      Imagine the following situation: The bot can hand over a question with a few suggestions to the chat.\n      Then the bot will wait for user input. But while it waits for user input the context and the situation can change.\n      So the current question or topic can become useless or subordinate.\n      So for example while the bot waits a timer can expire or an API or the website can generate some other contextual information.\n      The bot then will take all the new information into account and will for example prefer suddenly another question.\n      Its like in real life: While you're talking to your friend about getting into the pool today, it could suddenly start raining.\n      So the whole topic becomes useless. The topic will then change an you will maybe continue talking about the newest cinema films.\n    ")]),e._v(" "),o("h2",[e._v("What makes the logic graph so special?")]),e._v(" "),o("p",[e._v("\n      In short, there are no active blocking nodes as in many other chatbots.\n      Each time an underlying piece of information changes, the graph will include the entire context again.\n      This means that past conclusions, decisions and actions are questioned again.\n      Through this technology, different tasks can be parallelized and the conversation becomes more dynamic.\n      It also makes no difference how and when information gets into the graph.\n      Information can be actively inquired, responded by APIs, provided before the conversation starts, or injected by external processes at any time.\n      This means that a logic graph responds to the whole environment rather than just the user input.\n      New information affects the whole graph, not just the next question or action.\n    ")]),e._v(" "),o("h2",[e._v("What means privacy by design?")]),e._v(" "),o("p",[e._v("\n      Since this bot runs completely in the user's browser, it will not communicate any user input or information to any servers by default.\n      Yes of course: You can use API-Nodes and Webhocks. But you have to build such a structure first. So it's your descission if you want to send\n      user input to somewhere. Also, you can decide on your own which information will be sent to which servers.\n    ")]),e._v(" "),o("h2",[e._v("How can I embed the chatbot to a website?")]),e._v(" "),o("p",[e._v("\n      First, you have to download your chatbot flow file from the Wanderer Builder. You can store it then for example to your website's filesystem.\n      Then you can simply include a JavaScript webcomponent to your website that will then load your flow. That's it.\n      Check out the docs for more information.\n    ")]),e._v(" "),o("h2",[e._v("Can I use the bot builder for free?")]),e._v(" "),o("p",[e._v("\n      Yes! Absolutely. You can just use the bot builder on the Wanderer.ai website for free. You don't have to register or pay to use this application.\n      This becomes only relevant if you plan to run the builder or chatbots under your own public domains or inside your Apps and if you use professional plugins.\n      In this case you have to purchase a license.\n    ")]),e._v(" "),o("h2",[e._v("Under which license will the software be available?")]),e._v(" "),o("p",[e._v("\n      This project uses a dual licensing model. Most of the packages are available under the AGPLv3. But some plugins require a professional license.\n      That means that you have to purchase a license if you plan to run the bot builder or single chatbots on your own website using this professional plugins.\n      Use the professional plugins for free as long as you use them with the Wanderer.ai domain.\n    ")]),e._v(" "),o("h2",[e._v("Can you tell me something about the future pricing model?")]),e._v(" "),o("p",[e._v("\n      The pricing model is not very clear right now.\n      But I want to keep it simple. So you have to purchase a professional license for each domain a chatbot with professional plugins is running.\n    ")]),e._v(" "),o("h2",[e._v("Where are the flows stored?")]),e._v(" "),o("p",[e._v("\n      At the moment Wanderer.ai will not store any data for you. So you have to download your flows. You can then store them wherever you want.\n      Store your conversation flow on your device or upload it to GitHub to share it with others.\n    ")]),e._v(" "),o("h2",[e._v("Does the project use deep learning or neuronal networks?")]),e._v(" "),o("p",[e._v("\n      No. The core of the project uses a logic graph to find the next meaningful action based on a complex context.\n      This technology combines some kind of flow programming with traversal algorithms and graph theory.\n      Nevertheless, deep learning and neuronal networks can be coupled through APIs to generate new information for the graph.\n    ")]),e._v(" "),o("h2",[e._v("Why should my company use a chatbot that is transparent to the user?")]),e._v(" "),o("p",[e._v("\n      You should first ask yourself what the benefit of your chatbot should be.\n      Should the chatbot primarily help the user to solve their own problem?\n      Or should the bot influence the user with invisible and secret information to reach a hidden goal defined by the company?\n      In general, I believe that transparent chatbots will create more trust between customers and a company.\n    ")]),e._v(" "),o("h2",[e._v("I cannot use logic inside message templates. Why?")]),e._v(" "),o("p",[e._v("\n      This project uses logic-less templates powered by Mustache.js. That means that you can output data to your messages.\n      But logic is not supported inside messages itself. You cannot declare variables or call functions from inside templates.\n      The reason is, that the logic should be depicted through the graph structure and not inside hidden and cumbersome templates.\n      This is part of the strict design pattern of Wanderer.ai. It would also be a major security hole.\n    ")]),e._v(" "),o("h2",[e._v("Can I run the chatbots server side?")]),e._v(" "),o("p",[e._v("\n      No. At the moment this is not supported. This will maybe supported in the future.\n    ")]),e._v(" "),o("h2",[e._v("Can a bot communicate with third-party APIs?")]),e._v(" "),o("p",[e._v("\n      Yes. The bot can communicate with all sorts of APIs that will response pure JSON.\n    ")]),e._v(" "),o("h2",[e._v("How can I secure my API keys if the bot runs completely in the browser?")]),e._v(" "),o("p",[e._v("\n      That's a really good question. In general, API communication should be reduced as much as possible.\n      This creates systems that are less dependent, more data protection friendly and easier to maintain. However, Wanderer.ai will not stop you from targeting APIs.\n      If you need API keys, you should first redirect the requests through your own server, which attaches the keys to the request.\n    ")]),e._v(" "),o("h2",[e._v("Can I integrate third-party chat channels like WhatsApp or Facebook?")]),e._v(" "),o("p",[e._v("\n      No. Since Wanderer.ai currently only runs in the browser front end, the connection to other chat channels is technically not possible at the moment.\n      If the project and the technology are successful, I will think about a server variant. But for the moment this is a browser only solution.\n    ")]),e._v(" "),o("h2",[e._v("Can I improve the flow based on statistics?")]),e._v(" "),o("p",[e._v("\n      This is not possible at the moment because the software is privacy by design.\n      But you can however ask the users for data donations and you can then collect the user information through an API for example.\n      But you can also use analytics services like Google Analytics or etracker for example to get insights to the users flow.\n    ")]),e._v(" "),o("h2",[e._v("Is it possible to use NLU?")]),e._v(" "),o("p",[e._v("\n      NLU is a really big topic. So in general you can use all Services, that are reachable through an API.\n      But there are plans to implement a open source NLU system. So you can talk more freely to the bot in the future.\n    ")])])}],!1,null,null,null);t.default=component.exports}}]);