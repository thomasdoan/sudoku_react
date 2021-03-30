import styled from 'styled-components'
import GameButton from '../components/GameButton'

const GameControlsContainer = styled.div`
    // display: flex;
    // align-items: top;
    // justify-content: center;
    background-color:#74ad5a;
	border:2px solid #3b6e22;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:bold;
	padding:6px 12px;
	text-decoration:none;
	&:hover {
	background-color:#68a54b;
    }
    &:active {
	position:relative;
	top:1px;} 
    margin:4px
`;

const GameControls = ({name, onClick}) => {
    return (
        <GameControlsContainer>
            <div>
                <GameButton 
                    name={name}
                    onClick={onClick}
                />        
            </div>
        </GameControlsContainer>
    )
}

export default GameControls