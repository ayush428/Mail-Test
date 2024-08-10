import { sendEmail } from "@/app/component/mail";
export async function GET(request) {
    await sendEmail();
    return new Response(JSON.stringify({message: 'Hello World'}));
}

// export default function handler(req, res){
//     if (req.method === 'GET'){
//         res.status(200).json({message: 'Hello this is a get request'});
//     }
//     else{
//         res.status(405).json({message: 'Message not allowed'});
//     }
// }


