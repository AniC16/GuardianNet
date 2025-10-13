
export const harmfulLexicon = ['stupid','idiot','hate you','kill','loser','no one likes you','dumb']

export function analyzeMessageDraft(text){
  const lower = text.toLowerCase()
  const hit = harmfulLexicon.find(w => lower.includes(w))
  return !!hit
}

export function botReply(userText){
  const t = userText.toLowerCase()
  if (t.includes('report')) {
    return 'I can help you report a concern. Can you briefly describe what happened?'
  }
  if (t.includes('stressed') || t.includes('anxious')) {
    return 'I’m here for you. Would you like some breathing exercises or to talk to a counselor?'
  }
  if (t.includes('help')) {
    return 'You’re not alone. I can share resources, or connect you with a counselor. What would you prefer?'
  }
  return 'Thanks for sharing. I’m listening. If this feels serious, I can connect you with a counselor.'
}
