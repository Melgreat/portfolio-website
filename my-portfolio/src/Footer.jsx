import './Footer.css'

function FooterPage(){
    return (
        <footer className="footer-container">
          <div className="footer-content">
            <p className="footer-text">© {new Date().getFullYear()} Melvin Amaechi. All rights reserved.</p>
            <div className="footer-icons">
              <a href="https://github.com/Melgreat?tab=repositories" target="_blank" rel="noopener noreferrer">
                <img className="footer-icon" src="src/assets/8666686_github_icon.svg" alt="GitHub" />
              </a>
              <a href="https://www.behance.net/amaechiibiam" target="_blank" rel="noopener noreferrer">
                <img className="footer-icon" src="src/assets/5305150_behance_portfolio_behance logo_icon.svg" alt="Behance" />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <img className="footer-icon" src="src/assets/8679367_linkedin_icon.svg" alt="LinkedIn" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://x.com/home">
                <img className="footer-icon" src="src/assets/11244080_x_twitter_elon musk_twitter new logo_icon.svg" alt="Twitter" />
              </a>
            </div>
          </div>
        </footer>
      );
    
}
export default FooterPage