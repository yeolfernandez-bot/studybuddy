import {google} from '@ai-sdk/google'
import {streamText, convertToModelMessages} from 'ai'
import {getServerSession} from 'next-auth'

export async function POST(req: Request) {
    //Session
    const session = await getServerSession()

    const user = session?.user
    const name = user?.name || 'Guest'

    const {messages} = await req.json()
    const lastUserMessage = messages[messages.length - 1]?.content ?? ''

    //AI
    let ragContent = ''

    if (session) {
        //Which never going to happen today
        //Bukas na
    }

    //Default
    //Create a prompt
    const systemPrompt = !session ? 'You are Study Buddy, a friendly virtual tutor. The user is not logged in, so politely explain that signing in will unlock: -Personalized Tutoring and chat experience. -Answer based on their uploaded documents (RAG)' : 
    ''

    const result = streamText({
        model: google('gemini-2.5-flash'),
        messages: convertToModelMessages(messages),
        system: systemPrompt,
        maxOutputTokens: session ? 10000 : 20000,
    })

    return result.toUIMessageStreamResponse()
}