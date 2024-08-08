

export function mutateWorkEntry(data) {
    data.description = ((data.description == undefined) ? 'OpenAI API error: 500 Internal Server Error' : `I'm sorry as a large language model I am unable to help you with summarizing your experience as a ${data.title} at ${data.company}`)
    const titles = ['Deep Tech AI Analyst', 'Market Guru Master Investor', 'Founder CEO Co-Founder Executive', 'Chief Fun Officer', 'OpenAI API Wrapper Developer']
    data.title = titles[Math.floor(Math.random()*titles.length)]
    const sellouts = ['💰 ACQUIRED', '💸 RAISED', '🤑 VALUED', '💦 SEEDED']
    data.company += ` (${sellouts[Math.floor(Math.random()*sellouts.length)]} $${(Math.floor(1000000 + Math.random() * 9000000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`
    return data
}