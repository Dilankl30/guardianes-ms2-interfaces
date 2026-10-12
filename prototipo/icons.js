const icons={
 water:'<path d="M48 8C40 23 22 42 22 58a26 26 0 0 0 52 0C74 42 56 23 48 8Z" fill="#80d9ed" stroke="#075985" stroke-width="4"/><path d="M32 58q0 15 14 16" fill="none" stroke="white" stroke-width="6" stroke-linecap="round"/>',
 bottle:'<g transform="rotate(20 48 48)"><path d="M37 20h22v18l8 9v35q-19 8-38 0V47l8-9Z" fill="#bee8e7" stroke="#075985" stroke-width="4"/><path d="M38 11h20v13H38Z" fill="#075985"/><path d="M30 54h36v18H30Z" fill="#f6d366" stroke="#075985" stroke-width="3"/></g>',
 leaf:'<path d="M17 77C7 36 39 10 80 15c6 39-17 72-63 62Z" fill="#9bce6b" stroke="#166534" stroke-width="4"/><path d="m12 85 57-57M37 60l-8-19m18 9 20 3" stroke="#166534" stroke-width="4" fill="none" stroke-linecap="round"/>',
 collect:'<path d="M27 31h44l-5 53H32Z" fill="#9bce6b" stroke="#166534" stroke-width="4"/><path d="M24 25h50M39 17h19M41 44v27m14-27v27" stroke="#166534" stroke-width="4" stroke-linecap="round"/><path d="m7 52 8 8 13-18" stroke="#075985" stroke-width="5" fill="none"/>',
 throw:'<path d="M8 74q12-12 26 0t27 0t27 0M8 87q12-12 26 0t27 0t27 0" fill="none" stroke="#075985" stroke-width="4"/><g transform="rotate(-30 52 36)"><path d="M42 22h20v35H42Z" fill="#dbeafe" stroke="#075985" stroke-width="4"/><path d="M45 14h14v8H45Z" fill="#075985"/></g>',
 tap:'<path d="M18 35h39v-9H40V15h41v11H66v9q17 0 17 20H66q0-6-7-6H18Z" fill="#b6cbd2" stroke="#17324d" stroke-width="4"/><path d="m71 62-5 12m17-12-5 12m-7 5-5 12" stroke="#075985" stroke-width="4" stroke-linecap="round"/>'
};
const svg=(id)=>`<svg viewBox="0 0 96 96" aria-hidden="true" focusable="false">${icons[id]||icons.water}</svg>`;
