import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../../config.cjs';

const alive = async (m, sock) => {
  const prefix = config.PREFIX;
  const mode = config.MODE;
  const pushName = m.pushName || 'User';

  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "men") {
    await m.React('💮'); // React with a loading icon
    // Calculate uptime

    const uptimeSeconds = process.uptime();
    const days = Math.floor(uptimeSeconds / (24 * 3600));
    const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeSeconds % 3600) / 60);
    const seconds = Math.floor(uptimeSeconds % 60);

    
    // Get real time
    const realTime = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
    const xtime = moment.tz("Tanzania/Dodoma").format("HH:mm:ss");
    const xdate = moment.tz("Tanzania/Dodoma").format("DD/MM/YYYY");
    const time2 = moment().tz("Tanzania/Dodoma").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

    const aliveMessage = `𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰━━━━━━━━━━━━━━━⪼`;

    await Matrix.sendMessage(m.from, {
      image: fs.readFileSync('owner.jpg'),
      caption: str,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363299029326322@newsletter',
          newsletterName: "ᴅᴇᴍᴏɴ sʟᴀʏᴇʀ",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
};

export default alive;
        

/*нєℓℓσ
 *${pushName}* ${pushwish}
╭───────────────━⊷
║ ᴊᴏᴇʟ-xᴍᴅ ᴍᴀɪɴ  ᴍᴇɴᴜ
╰───────────────━⊷
╭───────────────━⊷
║ *ηαмє:* *ʝσєℓ χ∂ v³ вσт*
║ *ρяєƒιχ:*  *${prefix}*
║ *мσ∂є:*  *${mode}*
║ *тιмє:*  *${realTime}*
║ *σωηєя:*  *ℓσя∂ ʝσєℓ*
╰───────────────━⊷
╭───────────────━⊷
║   *ʝσєℓ χ∂ ν тняєє*
╰───────────────━⊷
*❑━❒ʝσєℓ χ∂ ν тняєє❑━❒*

---

*¢σηνєятєя*
- αттρ
- αттρ2
- αттρ3
- євιηαяу
- ∂вιηαяу
- ємσʝιмιχ
- мρ3

---

*αι*
- αι
- вυg
- яєρσят
- gρт
- ∂αℓℓє
- яємιηι
- gємιηι

---

*тσσℓ*
- ¢αℓ¢υℓαтσя
- тємρмαιℓ
- ¢нє¢кмαιℓ
- тят
- ттѕ

---

*gяσυρ ¢σммαη∂ѕ*
- ℓιηкgяσυρ
- ѕєтρρg¢
- ѕєтηαмє
- ѕєт∂єѕ¢
- gяσυρ
- g¢ѕєттιηg
- ωєℓ¢σмє
- α∂∂
- кι¢к
- нι∂єтαg
- тαgαℓℓ
- αηтιℓιηк
- αηтιтσχι¢
- ρяσмσтє
- ∂ємσтє
- gєтвισ

---

*∂σωηℓσα∂*
- αρк
- ƒα¢євσσк
- мє∂ιαƒιяє
- ριηтєяєѕт∂ℓ
- gιт¢ℓσηє
- g∂яινє
- ιηѕтα
- утмρ3
- утмρ4
- ρℓαу
- ѕσηg
- νι∂єσ
- утмρ3∂σ¢
- утмρ4∂σ¢
- тιктσк

---

*ρяєηιυм ¢σммαηgѕ*
- вυgмєηυ
- ∂σ¢вυg
- ℓσ¢¢яαѕн
- αмσυηтвυg <αмσυηт>
- ρмвυg <ηυмвєя>
- ∂єℓαувυg <ηυмвєя>
- тяσℓℓувυg <ηυмвєя>
- ∂σ¢υвυg <ηυмвєя>
- υηℓιмιтє∂вυg <ηυмвєя>
- вσмвυg <ηυмвєя>
- ℓαgвυg <ηυмвєя>
- g¢вυg <gяσυρℓιηк>
- ∂єℓαуg¢вυg <gяσυρℓιηк>
- тяσℓℓуg¢вυg <gяσυρℓιηк>
- ℓαввυg <gяσυρℓιηк>
- вσмg¢вυg <gяσυρℓιηк>
- υηℓιмιтє∂g¢вυg <gяσυρℓιηк>
- ∂σ¢υg¢вυg <gяσυρℓιηк>
----

*ѕєαя¢н*
- ρℓαу
- ут
- ιм∂в
- gσσgℓє
- gιмαgє
- ριηтєяєѕт
- ωαℓℓραρєя
- ωιкιмє∂ια
- утѕєαя¢н
- яιηgтσηє
- ℓуяι¢ѕ

---

*мαιη ¢σммαη∂ѕ*
- ριηg
- αℓινє
- σωηєя
- мєηυ
- ιηƒσвσт

---

*σωηєя ¢σммαη∂ѕ*
- ʝσιη
- ℓєανє
- вℓσ¢к
- υηвℓσ¢к
- ѕєтρρвσт
- αηтι¢αℓℓ
- ѕєтѕтαтυѕ
- ѕєтηαмєвσт
- αυтσвισ
- αυтσтуριηg
- αℓωαуѕσηℓιηє
- αυтσяєα∂
- αυтσѕνιєω

---

*ѕтαℓкєя*
- тяυє¢αℓℓєя
- ιηѕтαѕтαℓк
- gιтнυвѕтαℓк
---

*σтнєя ¢σммαη∂ѕ*
- ѕαρк
- αρρ
- αρρѕєαя¢н
- ρℓαуѕтσяє
- qυяαηνι∂єσ
- тσυяℓ
- υяℓ
- ¢нαηηєℓ
- ѕυρρσят
- ʝσєℓ
- ¢нαт
- qνι∂
- qυяαηνι∂
- ѕѕ

---

*ηєω ¢σммαη∂ѕ*
- ѕ¢σяє
- ¢ℓι¢к
- яєѕυℓтѕ
- gιт¢ℓσηє
- υρ∂αтє
- ѕηα¢кνι∂єσ
- ѕηα¢к
- ѕнσятєηυяℓ
- кι¢кαℓℓ
- ιρѕтαℓк
- gινєтєχт
- мє∂ιαƒιяє
- ƒαη¢у
- αηтι¢αℓℓ
- ωα¢нαηηєℓ
- мσνιє
----
*❑━❒ℓσя∂ ʝσєℓтє¢н❑━❑*`;

    await m.React('☄️'); // React with a success icon

    sock.sendMessage(
      m.from,
      {
        text: aliveMessage,
        contextInfo: {
          isForwarded: false,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363317462952356@newsletter',
            newsletterName: "ᴊᴏᴇʟ xᴅ ʙᴏᴛ ᴠ ⁷",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "ᴊᴏᴇʟ xᴅ ʙᴏᴛ ᴠ ⁷",
            body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴏʀᴅ ᴊᴏᴇʟ",
            thumbnailUrl: 'https://avatars.githubusercontent.com/u/162905644?v=4', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029Vak2PevK0IBh2pKJPp2K', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
    // preview menu image 
     await Matrix.sendMessage(m.from, {
        image: { url: `https://i.ibb.co/WcwzzY2/shaban-sobx-md.jpg` }, // 🔥 Image URL
        caption: status
      }, { quoted: m }
  );
  }
};

export default alive;
        
*/
