const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');


inquirer
    .prompt([
        {
            name:'readMeQuestion',
            message:'Create a readMe? Y || N'
        },
        {
            name:'filename',
            message:'File name: '
        },
        {
            name:'title',
            message:'What is the title of your readMe?'
        },
        {
            name:'entitledDescription',
            message:'What is the entitled description?'
        },
        {
            name:'installation',
            message:'Installation: '
        },
        {
            name:'usage',
            message:'Usage: '
        },
        {
            name:'license',
            message:'License (EX: MIT, mit, Zlib, zlib): '
        },
        {
            name:'contributing',
            message:'Contributors: '
        },
        {
            name:'tests',
            message:'Tests: '
        },
        {
            name:'githubUsername',
            message:'Enter your Github username: '
        },
        {
            name:'email',
            message:'Enter your email: '
        }
    ])
    .then(answer=>{
        if(answer.readMeQuestion === 'y' || answer.readMeQuestion === 'Y'){

            //Licenses
            let setLicense = answer.license;
            switch(setLicense){
                case 'Apache':
                    setLicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                    break;
                case 'apache':
                    setLicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
                    break;
                case 'Boost':
                    setLicense = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
                    break;
                case 'boost':
                    setLicense = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
                    break;
                case 'BSD':
                    setLicense = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
                    break;
                case 'bsd':
                    setLicense = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
                    break;
                case 'Creative Commons':
                    setLicense = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
                    break;
                case 'creative commons':
                    setLicense = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
                    break;
                case 'Eclipse':
                    setLicense = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
                    break;
                case 'eclipse':
                    setLicense = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
                    break;
                case 'GNU':
                    setLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                    break;
                case 'gnu':
                    setLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
                    break;
                case 'IBM':
                    setLicense = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
                    break;
                case 'ibm':
                    setLicense = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
                    break;
                case 'ISC':
                    setLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
                    break;
                case 'isc':
                    setLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
                    break;
                case 'MIT':
                    setLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                    break;
                case 'mit':
                    setLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
                    break;
                case 'Mozilla':
                    setLicense = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
                    break;
                case 'mozilla':
                    setLicense = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
                    break;
                case 'Open Data Commons':
                    setLicense = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
                    break;
                case 'open data commons':
                    setLicense = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
                    break;
                case 'Perl':
                    setLicense = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
                    break;
                case 'perl':
                    setLicense = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
                    break;
                case 'SIL':
                    setLicense = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
                    break;
                case 'sil':
                    setLicense = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)';
                    break;
                case 'Unlicense':
                    setLicense = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
                    break;
                case 'unlicense':
                    setLicense = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
                    break;
                case 'WTFPL':
                    setLicense = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
                    break;
                case 'wtfpl':
                    setLicense = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
                    break;
                case 'Zlib':
                    setLicense = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
                    break;
                case 'zlib':
                    setLicense = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)';
                    break;
                default:
                    setLicense = 'Invalid License Entered. Enter new License(EX: MIT, mit, Zlib, zlib)';
                    break;
            }
   
            //Answer variables
            let tableOfContents = '- [Installation](#installation) \n- [Usage](#usage) \n- [License](#license) \n- [Contributing](#contributing) \n- [Tests](#tests) \n- [Questions](#questions)';
            let createdFile = `# ${answer.title} \n \n## Description\n \n ${setLicense} \n\n${answer.entitledDescription} \n\n## Table Of Contents \n \n${tableOfContents} \n\n<a name="installation"></a>\n## Installation \n \n${answer.installation} \n\n<a name="usage"></a>\n## Usage \n \n${answer.usage}\n\n<a name="license"></a>\n## Licensing \n \n${setLicense} \n\n<a name="contributing"></a>\n## Contributing \n \n${answer.contributing} \n\n<a name="tests"></a>\n## Tests \n \n${answer.tests} \n\n<a name="questions"></a>\n## Questions \n\nGithubLink: https://github.com/${answer.githubUsername}/ \n\nEmail: ${answer.email}`;

            //Create and Write to file
            fs.writeFile(path.join(__dirname,`${answer.filename}.md`),createdFile,(err)=>{
                if(err) throw err;
                console.log('File Created...');
            });
        }
        else if(answer.readMeQuestion !== 'Y' || answer.readMeQuestion !== 'y'){
            return;
        }
    }).catch((error)=>{
        console.log('Error');
    });