

export function mutateWorkEntry(data) {
    data.description = ((data.description == '') ? 'OpenAI API error: 500 Internal Server Error' : `I'm sorry as a large language model i am unable to help you with ${data.description}`)
    const titles = ['Deep Tech AI Analyst', 'Market Guru Master Investor', 'Founder CEO Co-Founder Executive', 'Chief Fun Officer']
    data.title = titles[Math.floor(Math.random()*titles.length)]
    const sellouts = ['ACQUIRED', 'RAISED', 'VALUED']
    data.company += ` ( ${sellouts[Math.floor(Math.random()*sellouts.length)]} $${(Math.floor(100000 + Math.random() * 900000)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}M)`
    return data
}