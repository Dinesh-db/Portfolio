import "./Project.css"

function Project(){
    return(
        <>
        <div className="project-container">
            <h1 className="pro-title">Projects</h1>
            <div className="project-set">
                <div className="projects-name">
                    <div className="project-image">
                        <img src="https://media.istockphoto.com/id/1267010934/photo/experienced-engineer-explaining-the-problems-in-construction-works-development-after-recession.jpg?s=612x612&w=0&k=20&c=kSbguQRPqhgKgYzy-P-e1ScLXBXWszQn1JimPfE4aWk=" alt="Avatar" className="image"/>
                    </div>
                    <div className="project-details">
                        <h1>TGK ENTERPRISES</h1>
                        <p>Website for the Company TGK Constructions, Salem.TGK website is for customers who want to buy the products and booking of orders for their construction building. And also contact them in website by they can recieve mails  from the company.
                            It is a customer friendly website.
                        </p>
                        <div className="details-frameworks">
                            <div className="details-prj">JavaScript</div>
                            <div className="details-prj">React JS</div>
                            <div className="details-prj">Node JS</div>
                            <div className="details-prj">Express</div>
                            <div className="details-prj">MongoDB</div>
                        </div>
                        <div className="proj-github">
                            <a href="https://github.com/Dinesh-db/TGK-Frontend" target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-set">
                <div className="projects-name">
                    <div className="project-image">
                        <img src="https://wallpaperaccess.com/full/5004667.png" alt="Avatar" className="blockchain"/>
                    </div>
                    <div className="project-details">
                        <h1>Blockchain for Medical records</h1>
                        <p>This application is used to store the medical records in secure manner in blockchain.The person who have an access only
                            those people can see your records otherwise they can't.This application can be used by both doctor and patients.For storing the medical 
                            records secure and safe in blockchain.The records can't be hackable.
                        </p>
                        <div className="details-frameworks">
                            <div className="details-prj">JavaScript</div>
                            <div className="details-prj">React JS</div>
                            <div className="details-prj">medical-records</div>
                            <div className="details-prj">Metamask</div>
                            <div className="details-prj">Blockchain</div>
                            <div className="details-prj">Ethereum</div>
                            <div className="details-prj">Solidity</div>
                        </div>
                        <div className="proj-github">
                            <a href="https://github.com/Dinesh-db/Blockchain" target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-set">
                <div className="projects-name">
                    <div className="project-image">
                        <img src="https://media.istockphoto.com/id/1291204640/vector/paper-cut-tic-tac-toe-game-icon-isolated-on-grey-background-paper-art-style-vector.jpg?s=612x612&w=0&k=20&c=U7HQfwmBoSNuxaPTF113gFyWA9DDM7UmHq2VXPP2uAU=" alt="Avatar" className="blockchain"/>
                    </div>
                    <div className="project-details">
                        <h1>TIC TAC TOE Game</h1>
                        <p>The game Tic Tac Toe is traditionally played on a 3 × 3 grid. Players take turns placing a mark in one of the cells of the grid. The goal of the game is for players to position their marks so that they make a continuous line of three cells vertically, horizontally, or diagonally.
                        </p>
                        <div className="details-frameworks">
                            <div className="details-prj">JavaScript</div>
                            <div className="details-prj">React JS</div>
                            <div className="details-prj">Game</div>
                            <div className="details-prj">Interactive</div>
                            
                        </div>
                        <div className="proj-github">
                            <a href="https://github.com/Dinesh-db/Tic-Toe" target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Project;