import {Dropbox} from 'dropbox';

const dbx = new Dropbox({accessToken: 'sl.BV5T6pSkxWdC2FYKyZEZlhkE8gHSZ51Y27r6CEcXxg7U1p8JaKSr35OVUrshKAzs3rUPiXtkEnPNx9WEdfOaRDtdPEthXB4G_Kqd1_AXle3iKRU2YNN2or8WSoCCe3yw8BcRRS6dTkfu'});

function uploadToDropbox(fileName, folderName) {
    dbx.filesUpload({path: `/${folderName}/${fileName}.pdf`, contents: fileName + ".pdf"})
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });
};

uploadToDropbox("output", "newFolllder")