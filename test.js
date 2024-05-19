function domain_name_generator(){
    const pronoun = ['the', 'our',];
    const adj = ['awesome', 'tiny', 'prime','max'];
    const noun = ['wiki', 'video', 'plus', 'hub'];
    const ext = ['.com', '.org', '.es', '.io', '.net'];

    const first = pronoun[Math.floor(Math.random() * pronoun.length)];
    const second = adj[Math.floor(Math.random() * adj.length)];
    const third = noun[Math.floor(Math.random() * noun.length)];
    const fourth = ext[Math.floor(Math.random() * ext.length)];

    const domain_name =`${first}${second}${third}${fourth}`;
    document.getElementById("domain").value = domain_name
}
