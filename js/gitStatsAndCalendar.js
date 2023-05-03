    GitHubCalendar(".calendar", "Venkysanju246");
  
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Venkysanju246", { responsive: true });
  
    // Use a proxy
    GitHubCalendar(".calendar", "Venkysanju246", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${Venkysanju246}`)
       }
    }).then(r => r.text())