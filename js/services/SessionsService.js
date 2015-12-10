
angular.module("eu.luminis.devcon.schedule").service('sessionsService', function() {

	var sessionSequence = 0;
	
	var blocks = [
		{
			timeslot: "09:30 - 11:30",
			sessions: [	
				{
					id: sessionSequence++,
					room: "Room 3",
					title: "Opening keynotes",
					speakers: ["Stéphane Nicolas"],
					description: "<ul><li>Welcome and announcements by Stephan Janssen and guests</li><li>Mark Reinhold, Chief Architect of the Java Platform Group at Oracle</li><li>“A Universe from Nothing” by Professor Lawrence M. Krauss</li></ul>"
				}
			]
		},
		{
			timeslot: "12:00 - 13:00",
			sessions: [	
				{
					id: sessionSequence++,
					room: "Room 3",
					title: "Reflection No Reflection : Boosting performance on Android by bypassing Reflection API",
					speakers: ["Stéphane Nicolas"],
					description: "<p>On Android, many applications rely on the Java Reflection API. For instance, all data driven apps get data from the network, save data in your local cache files / databases. And most of the libraries used to simplify those tasks will use reflection in their core.</p><p>Unfortunately, Reflection is slow on Android due to limitations of Dalvik and Art. The usual workaround is to write annotation processors and replace Reflection by generated code. But, it comes with a price : all the robust and mature libs from Java can't be reused and must be rewritten, often in a degraded, simpler version. And the annotation processor API is quite tricky, leaving this work to a handful of expert coders.</p><p>In this talk, we will demonstrate a new approach using the Reflection No Reflection (RNЯ). This new technology provides a much faster access to reflection data, while maintaining compatibility with the Reflection API. Using this technique, any library can swap out use of the Reflection API with this interface-compatible implementation to achieve greater performance.</p>",
					keywords: ["java", "android"]
				},
				{
					id: sessionSequence++,
					room: "Room 4",
					title: "The Power of Open Source, Open Containers, and an Open Cloud",
					speakers: ["Philip Estes", "Ralph Bateman"],
					description: "<p>IBM has been fully committed to open source software for over a decade. Starting with an initial commitment to Linux, IBM's open source involvement has grown from an initial focus on the Linux kernel, to creating and open sourcing Eclipse, to present day involvement in the OpenStack, Cloud Foundry, and Docker communities.</p><p>So why do large enterprises like IBM value Open Source? This talk will reveal the power of open source communities, specifically looking at the arena of cloud computing. We'll look at how IBM is involved in improving hot technologies like Docker, enabling the \"build, ship, and run\" metaphor from a developer's laptop all the way up to a production-ready and secure public cloud.</p><p>More than just talk, we want to demonstrate these capabilities live in a fun and engaging way. We'll use a gaming application containerized and deployed in a public Docker cloud with audience participation to show how these technologies work in a real-world scenario that will hopefully offer a fun way to experience the power of an open cloud architecture!</p>",
					keywords: ["java", "opensource", "docker"]
				},
				{
					id: sessionSequence++,
					room: "Room 5",
					title: "Asynchronous programming in Java 8: how to use CompletableFuture",
					speakers: ["José Paumard"],
					description: "Java 8 saw the introduction of a new API to handle asynchronous patterns. This API is built on two elements: the CompletionStage interface and the CompletableFuture class. This presentation aims to explain how the patterns introduced by this interface and it implementing class are new to the Java platform, and how they fill the gap in the old Future patterns. The different models are precisely presented: how to create complex asynchronous processing pipelines, how to deal with exceptions, how to test such a complex code. Many examples are shown, from the classical question of remote service access to testing asynchronous REST Service. We will show the new patterns introduced to chain asynchronous operations and how to deal with special threads, especialy in GUI environments. We will also describe new ideas in CDI: asynchronous events.",
					keywords: ["java", "java9"]
				}
				,
				{
					id: sessionSequence++,
					room: "Room 6",
					title: "TCP? UDP? Que? – Fundamentals that were abstracted away from us",
					speakers: ["Hadi Hariri"],
					description: "Abstractions are an intrinsic part of software. We build them to try and raise the level at which we need to write code and not have to deal with the nitty gritty details. But abstractions also have a downside: lack of concern about how things work can prove problematic. We can make wrong decisions and use abstractions counterproductively. With widespread adoption of single page applications that use both HTTP and at times web sockets or other frameworks built on top of sockets, it is good to understand what goes on under the cover. In this talk we’re going to go back to basic, and dive into sockets, covering TCP, UDP, creating custom protocols et al. and see how sometimes something that would seem complicated can easily be addressed simply. It will be a trip down memory lane to recall important concepts that might have been forgotten."
				}
				
			]
		},
		{
			timeslot: "14:00 - 15:00",
			sessions: [	
				{
					id: sessionSequence++,
					room: "Room 3",
					title: "JRuby 9000",
					speakers: ["Charles Nutter"],
					description: "Ruby has come a long way since JRuby first ran Rails in 2006. Frameworks like Rails have grown up with the modern web, now supporting web sockets, microservices, and integration with Javascript client libraries like Ember. Concurrency utilities modeled after the JDK are helping Ruby scale horizontally. Applications can be built with Rake - or with JRuby plugins for Gradle and Maven. Maven poms can be written in a beautiful Ruby DSL. Swing, JavaFX, and other graphics libraries become easy and fun with JRuby. Sass and Asciidoctor are already being used in Java apps thanks to JRuby. And you can bundle up the whole thing in an executable jar or war file; your devops will never know it's Ruby. Come see what JRuby 9000 can do for you in 2015."
				},
				{
					id: sessionSequence++,
					room: "Room 4",
					title: "JSF with PrimeFaces, From Ugly Duckling to a Beautiful Swan",
					speakers: ["Cagatay Civici"],
					description: "<p>JSF has come a long way since its initial release and managed to catch up with modern web development model. Combined with the popular PrimeFaces framework, JSF unleashes its true potential.</p><p>This session takes you on a tour of modern component based java development with server rendering featuring rich set of components, responsive design, powerful Ajax APIs, a real-time push framework with websockets, a mobile web renderkit, the dialog framework, extensive client-side validation and attractive page layouts.</p>"
				},
				{
					id: sessionSequence++,
					room: "Room 5",
					title: "Modern Java Component Design with Spring 4.2",
					speakers: ["Juergen Hoeller"],
					description: "Spring's programming and configuration model has a strong design philosophy with respect to application components and configuration artifacts. Spring's annotation-based component story is fine-tuned for source code readability as well as consistency across an entire application's codebase. This session presents selected Spring Framework 4 component model highlights, with a focus on the upcoming Spring Framework 4.2 and a selection of Java 8 enabled features, illustrated with many code examples and noteworthy design considerations."
				}
				,
				{
					id: sessionSequence++,
					room: "Room 6",
					title: "Dive into Spark Streaming",
					speakers: ["Hadi Hariri"],
					description: "<p>Apache Spark is a distributed computing framework that enables scalable, high-throughput, and fault-tolerant processing of data. Spark Streaming delivers the power of Spark to process streams of data in near real-time.</p><p>After a quick recon of the surface, in this talk we are going to dive into Spark Streaming functional and operational aspects. Through several examples, we will explore the Spark Streaming API, will discuss some of the challenges of processing streaming data in real-time and will provide a clear understanding of the internal processes that are key for the successful production deployment of a Spark Streaming application.</p>"
				}
				
			]
		}
	];
	
	this.getAllBlocks = function() {
		return blocks;
	};
	
	this.getSession = function(id) {
		var result;
		angular.forEach(blocks, function(block) {
			var timeslot = block.timeslot;
			angular.forEach(block.sessions, function(session) {
				if (session.id == id) {
					result = session;
					result.timeslot = timeslot;
				}
			});
		});
		return result;
	};
	
});
