const month = new Date().getMonth();
 
if (month === 5) {
  document.body.insertAdjacentHTML("beforeend", `
    <div id="popup-overlay" style="position:fixed;inset:0;background:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:9999;">
      <div style="background:#1a1a1a;padding:2rem;border-radius:12px;max-width:380px;width:90%;text-align:center;">

        <h2 style="margin:0 0 0.75rem;">Happy Pride Month!</h2>
        
        <button onclick="document.getElementById('popup-overlay').remove()" style="background:#111;color:#fff;border:none;padding:0.5rem 1.5rem;border-radius:8px;cursor:pointer;">Close</button>
      </div>
    </div>
  `);
}