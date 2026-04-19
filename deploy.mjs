import * as ftp from 'basic-ftp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    client.ftp.ipFamily = 4; // Force IPv4
    client.timeout = 300000; // 5 minutes timeout
    
    try {
        await client.access({
            host: "ftpupload.net",
            user: "if0_41689602",
            password: "zf69jVQhc7a",
            secure: false
        });

        console.log("Connected to FTP server");
        
        await client.cd("htdocs");
        console.log("Moved to htdocs");
        
        client.trackProgress(info => {
            console.log(`File: ${info.name}, Type: ${info.type}, Progress: ${info.bytesOverall}/${info.bytesTotalOverall}`);
        });

        console.log("Starting directory upload...");
        await client.uploadFromDir(path.join(__dirname, "dist"));
        
        console.log("Deployment successful!");
    } catch (err) {
        console.error("Deployment failed:", err);
    } finally {
        client.close();
    }
}

deploy();
