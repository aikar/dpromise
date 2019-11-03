# dpromise
Deferred Promises. Create a promise that allows deferring completion of the promise for more flexible control.

## Usage

```javascript
import {deferPromise} from "@aikar/dpromise";
// or
const {deferPromise} = require("@aikar/dpromise");

const promise = deferPromise();
promise.resolve();
promise.reject(new Error());
```

## Flexibility of control.
Standard promise creation implies that the creator of the promise will begin the process of how to fulfill the promise.

But what if that is not what you want? What if you want something else to fulfill the promise?

Deferred promises accomplish this by decoupling Promise creation from Promise fulfillment. 

## Anti Pattern rumours
**"Isn't this an anti pattern?"**
You may of heard that Promise.defer() and the like in Bluebird is an "anti-pattern", but rest assured, it is not.

Just because an experienced person says something, does not make it true. Anyone declaring that this is an anti pattern
is expressing an **OPINION**.

And here I am expressing my opinion that they are wrong and used very poor reasoning for declaring such a statement.

Both the reasons stated at [Bluebird](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns) are invalid.

1. The defer library did not encourage this flawed code nor enable it. 
There are numerous ways that flawed logic could of surfaced, including using non deferred promises.
2. This is a very poor argument "Because another solution is already available".\
\
Again, the defer functionality did not encourage this use, and it's also not fair to say it's an inappropriate use.\
\
What if you are in an environment that does not have a promisify method supplied? \
\
What if you have a more complicated API you are interfacing that does not use standard callbacks? 
This would be all valid use cases. 

If we are going to accuse a specific pattern to be an anti pattern because some developer used it when a better
solution was available, then we might as well call the entire language an anti pattern.

Let's also mention that this pattern is part of the core system for Java 8+ Promise/Future support. 
To say this is an anti pattern, would be saying the same for the entire CompletableFuture system in Java.

This is a tool. There are many tools in your toolbox. Misusing a tool is not the tools fault.

## Aren't there a few other deferred promise libraries out there?
Yes, they all return an object wrapper requiring you to do await result.promise;

This library returns an actual extended Promise object.

## How can I change what Promise is used
Override the Promise export this module exports (Not recommended)
```javascript
require("@aikar/dpromise").Promise = require("bluebird");
````

## License
dpromise (c) Daniel Ennis (Aikar) 2019-present.
dpromise is licensed [MIT](https://tldrlegal.com/license/mit-license). See [LICENSE](LICENSE)

