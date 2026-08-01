const fs = require('fs');
const readline = require('readline');
const path = require('path');

const transcriptPath = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\c9a11bae-c25a-46da-8ff6-35872100692b\\.system_generated\\logs\\transcript_full.jsonl';
const outDir = 'C:\\PORTFOLIO\\old_version_backup';

if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir);
}

async function extractFiles() {
    const fileStream = fs.createReadStream(transcriptPath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let filesFound = {};

    for await (const line of rl) {
        try {
            const entry = JSON.parse(line);
            
            if (entry.type === 'TOOL_RESPONSE' && entry.content && entry.content.includes('File Path:')) {
                const match = entry.content.match(/File Path: .*PORTFOLIO[\/\\]([^`]+)`/i);
                if (match) {
                    const filename = match[1];
                    if (['index.html', 'style.css', 'script.js', 'data.js'].includes(filename) && !filesFound[filename]) {
                        console.log(`Found first view_file for ${filename}`);
                        const lines = entry.content.split('\n');
                        let fileContent = [];
                        let isReading = false;
                        for (const l of lines) {
                            const lineMatch = l.match(/^\d+:\s(.*)$/);
                            if (lineMatch) {
                                isReading = true;
                                fileContent.push(lineMatch[1]);
                            } else if (isReading && l.match(/^The above content/)) {
                                break;
                            }
                        }
                        
                        if (fileContent.length > 0) {
                            fs.writeFileSync(path.join(outDir, filename), fileContent.join('\n'));
                            filesFound[filename] = true;
                        }
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
    console.log("Extraction complete. Found status:");
    console.log(filesFound);
}
extractFiles();
