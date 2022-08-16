export default async (req, res) => {
    const url = "https://api.github.com/users/abdulolagunju19/repos"
    const response = await fetch(url)
    const json = await response.json()
    const projectsList = []

    json.sort(function (a, b) {
        return b.size - a.size;
    });

    json.forEach(p => {
        if(p.stargazers_count > 0)
        {
            projectsList.push({
                "name": p.name,
                "stars": p.stargazers_count,
                "url": p.html_url,
                "description": p.description,
                "language": p.language,
                "size": p.size
            })
        }
    })

    return res.status(200).json({
        repos: projectsList
    })
}
