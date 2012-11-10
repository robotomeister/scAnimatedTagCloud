# scAnimatedTagCloud.jquery.js

Creates an animated tag cloud effect from an unordered list

## Installation

Download and include jQuery library.

Now download and include this script:

    <script src="/path/to/scAnimatedTagCloud.jquery.js"></script>

## Usage

Sample HTML:
    &lt;div class=&quot;scTagsContainer scTags&quot;&gt;
        &lt;ul&gt;
            &lt;li class=&quot;scExpressiveFontStyle3&quot;&gt;&lt;span&gt;LAMP&lt;/span&gt;&lt;span class=&quot;scInitialHidden&quot;&gt;.NET&lt;/span&gt;&lt;/li&gt;            
            &lt;li class=&quot;scExpressiveFontStyle2&quot;&gt;&lt;span&gt;git&lt;/span&gt;&lt;span class=&quot;scInitialHidden&quot;&gt;svn&lt;/span&gt;&lt;/li&gt;
            &lt;li class=&quot;scExpressiveFontStyle1&quot;&gt;&lt;span&gt;LESS&lt;/span&gt;&lt;span class=&quot;scInitialHidden&quot;&gt;HTML&lt;/span&gt;&lt;/li&gt;
            &lt;li class=&quot;scExpressiveFontStyle3&quot;&gt;&lt;span&gt;MySQL&lt;/span&gt;&lt;span class=&quot;scInitialHidden&quot;&gt;MSSQL&lt;/span&gt;&lt;/li&gt;
            &lt;li class=&quot;scExpressiveFontStyle2&quot;&gt;&lt;span&gt;PHP&lt;/span&gt;&lt;span class=&quot;scInitialHidden&quot;&gt;CSS&lt;/span&gt;&lt;/li&gt;
            &lt;li class=&quot;scExpressiveFontStyle3&quot;&gt;&lt;span&gt;Symfony&lt;/span&gt;&lt;span class=&quot;scInitialHidden&quot;&gt;CakePHP&lt;/span&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt; 

Initialize and start the plugin:

    $('.scTagsContainer').scAnimatedTagCloud();    


## Configuration

Author's Note: Although the configuration values are stated below, in the current version only the default values are supported.

The following default configuration values can be overrided:

    this.defaults = {
        styles: {1:'scExpressiveFontStyle1'}, //array of strings representing CSS classes to apply to tags
        density: 100, //values: 0-100, percentage of tags that are shown at one time (so some may be hidden at times)
        speed: 2000, //values in ms, for how fast animation occurs
        speedVariance: 0, //shift speed by +/- random value
        animateCount: 1, //value for how many elements to animate at once
        initialOrder: 'static', //options: static, random. random mixes tag order on page load
        initialStyles: 'static', //options: static, random, ascending, descending. random mixes tag styles on page load
        insertionOrder: 'random', //options: random, queue, queuereverse. determines how tags are removed/inserted
        animation: 'switch', //options: random, fade, slide, toggle, switch, removeonly, insertonly
        animationSpeed: 800, //values: jquery values
        position: 'fluid' //options: hold, fluid. hold keeps elements in place. fluid moves stuff around
    };
    
## Version History

0.1.0
-----
- Default options working
- Demo at http://www.solidcoding.com
    
## Authors

[William Lee](https://github.com/robotomeister)