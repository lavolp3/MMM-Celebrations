# MMM-Celebrations
A [MagicMirror](https://github.com/MichMich/MagicMirror) module to display today's celebrations.  
Currently only available in German!  
The module will revolve descriptions for the celebrations.  
Data is being fetched from the page [welcher-tag-ist-heute.org](http://welcher-tag-ist-heute.org)


![Alt text](/screenshot.jpg)

## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/lavolp3/MMM-Celebrations.git`.

2. Move into your module folder and execute npm install:
```javascript
cd MMM-Celebrations
npm install
```


2. Add the module to the modules array in the `config/config.js` file:
````javascript
	{
		module: 'MMM-Celebrations',
		position: 'top_left',	// This can be any of the regions. Best results in left or right regions.
		header: 'Heute ist:', // This is optional
		config: {
			// You don't need any configuration options currently
		}
	},
````

That's it!

## Configuration options

Nothing to configure yet.


<table width="100%">
	<thead>
	</thead>
	<tbody>
	</tbody>
</table>


The MIT License (MIT)
=====================

Copyright © 2019 Dirk Kovert

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
