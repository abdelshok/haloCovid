// Covid Component Page

// Infrastructure
// Will have all the `separated` custom component stored here, to make copy/pasting into the Halo project
// easier.
// I normally would separate them and keep the code modular, but since it isn't done in the front-end 
// of Halo and since I can't change the folder structure, I'll put all of the components here, as 
// --- separate --- components and whomever takes the code can decide to keep them here to centralize
// information or separate them in however form they deem fits with the already existing structure 
// of the project

// Styling
// Using here Styled-Components. It is superior to most other styling frameworks for many reason.
// In this case, it centralizes styling and components together by merging them. An added benefit
// is that it will allow anyone who reads this code to understand the structure of the page more 
// easily, which will accelerate debugging or simply any modification :)

import React, { Component } from 'react';
import styled from 'styled-components';

// Dynamically rendered. Just modify the mainContentHeight here if you want the Header / MainContent sizes
// to change their sizing
const ComponentTheme = {
    mainContentHeight: 75,
    leftProposalWidth: 63,
    marginLeft: 40,
    marginRight: 20,
    proposalMarginBottom: 20,
    
}
const CovidComponentPageWrapper = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
`

const ComponentHeader = styled.div`
    height: 300px;
    width: 100%;
    background: linear-gradient(90deg, #8D5FEE -1.25%, #63EEE6 100%);
    display: flex;
    flex-direction: column;
`


const HeaderLogo = styled.h1`
    display: inline-block;
    margin-left: 20px;
    font-size: 28px;
    color: white;
    font-weight: 800;
`

const HeaderNavigationBar = styled.div`
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: flex-start;

`

const HeaderMainText = styled.div`
    background-color: transparent;
    height: 100%;
    color: white;
`

const HeaderMainTextTitle = styled.h1`
    font-size: 36px;
    margin-left: 50px;
    margin-top: 40px;
    margin-bottom: 5px;
`

const HeaderSecondaryText = styled.h2`
    font-size: 22px;
    margin-left: 50px;
    margin-top: 5px;

`

// ${props => (100 - props.ComponentTheme.mainContentHeight) + '%'};
const ComponentMainContent = styled.div`
    height: ${props => props.ComponentTheme.mainContentHeight + '%'};
    width: 100%:
    background-color: #GGGGGG;
    display: flex;
    flex-direction: row;
`
const ProposalLeftWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
`

const RightContainerWrapper = styled.div`
    height: 100%;
    width: 40%;
    background-color: transparent;
    padding-left: 80px;
`

const MainContentWrapper = styled.div`
    width: 100%;
    background-color: transparent;
    padding-top: 10px;
    font-family: -apple-system, system-ui, sans-serif;
`;

const Title = styled.h1`
    font-size: 20px;
    line-height: 30px;
    font-weight: bold;
    color: rgb(0,0,0);
    cursor: pointer;
    margin-bottom: 2px;
    background-color: transparent;
    width: 80%;
    margin-left: ${props => (100 - props.ComponentTheme.marginLeft) + 'px'};
    margin-right: ${props => (100 - props.ComponentTheme.marginRight) + 'px'};
`;

const SubTitle = styled.h3`
    font-size: 15px;
    color: rgb(0,0,0);
    margin-top: 5px;
    width: 80%;
    margin-left: ${props => (100 - props.ComponentTheme.marginLeft) + 'px'};
    margin-right: ${props => (100 - props.ComponentTheme.marginRight) + 'px'};
    margin-bottom: 0px;
`;

const ProposalWrapper = styled.div`
    width: 100%;
    height: auto;
    background-color: transparent
    overflow-y: scroll;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProposalCard = styled.div`
    height: 290px;
    width: auto;
    background-color: transparent;
    margin-left: ${props => (100 - props.ComponentTheme.marginLeft) + 'px'};
    margin-right: ${props => (100 - props.ComponentTheme.marginRight) + 'px'};
    margin-top: 15px;
    margin-bottom: 20px;
    border-color: rgb(239, 239, 239);
    border-style: solid;
    border-width: 1px;
    box-shadow: rgba(0,0,0,0.25) 0px 4px 4px 0px;
    box-sizing: border-box;
    color: rgb(118, 134, 147);
    font-size: 18px;
    padding: 31px 38px 15px 38px;
    display: flex;
    flex-direction: column;
    position: relative;

`

const ResearcherProfileWrapper = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
`

const ResearcherName = styled.p`
    color: black;
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
`

// Doesn't have to be named university if researchers have different backgrounds
const ResearcherUniversity = styled(ResearcherName)`
    color: rgb(158,158,158)
`

const ResearchInfoWrapper = styled.div`
    background-color: transparent;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 180px;
`

const ResearchTitle = styled(ResearcherName)`
    font-style: bold;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
`

const ResearchDescription = styled(ResearcherName)`
    color: grey;
    font-size: 15px;
`

const ResearchBottomWrapper = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ResearchLink = styled.p`
    color: #5F9CEE;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
`;

const ResearchMetaData = styled(ResearchLink)`
    font-size: 14px;
    font-weight: 500;
`;

class ProposalCardComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Empty for now
        }
    }
    render() {
        const { props, togglePageDisplay } = this.props

        return (
            <ProposalWrapper>
            <ProposalCard ComponentTheme={ComponentTheme}> 
                <ResearcherProfileWrapper>
                    <ResearcherName> {props.researcherName} </ResearcherName>
                    <ResearcherUniversity> {props.researcherUniversity} </ResearcherUniversity>
                </ResearcherProfileWrapper>
                <ResearchInfoWrapper>
                    <ResearchTitle> {props.researchTitle} </ResearchTitle>
                    <ResearchDescription> {props.researchSummary} </ResearchDescription> 
                </ResearchInfoWrapper>
                <ResearchBottomWrapper>
                    <ResearchLink onClick={togglePageDisplay} >
                        See full proposal >
                    </ResearchLink>
                    <ResearchMetaData>
                    {props.researchLikes} Comments {props.researchComments} Likes
                    </ResearchMetaData>
                </ResearchBottomWrapper>
            </ProposalCard>
        </ProposalWrapper>
        )
    }
}

const SubmitProposalHeader = styled(MainContentWrapper)`
    height: 80px;
    margin-bottom: 10px;
`
const RightComponentTitle = styled(Title)`
    margin-left: 0px;
`

const RightComponentSubTitle = styled(SubTitle)`
    margin-left: 0px;
`

const SubmitProposalWrapper = styled.div`
    background-color: transparent;
    height: auto;
    display: flex;
    display: flex;
    flex-direction: column;
    width: 70%;
`

const ProposalTypesWrapper = styled.div`
    width: 100%;
    height: 70%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
`

const ProposalCategoryCard = styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: ${ props => props.proposalType == props.stateType ? '#5F9CEE' : 'white'};
    height: 90px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
`

const ProposalCategoryLeftIconWrapper = styled.div`
    background-color: transparent;
    align-items: center;
    display: flex;
    width: 24%;
    justify-content: center;
`

// Make names above and under similar
const ProposalRightDescriptionWrapper = styled.div`
    width: 76%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
    
`
const OuterCircle = styled.div`
    width: 29px;
    height: 29px;
    background-color: white;
    border: 2px solid #5F9CEE;
    border-radius: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;


`
const InnerCircle = styled.div`
    width: 19px;
    height: 19px;
    background-color: ${ props => props.proposalType == props.stateType ? '#5F9CEE' : 'white'};
    border-radius: 50%;
    margin: 0 auto;
    cursor: pointer;
`

const SubmitProposalButton = styled.button`
    cursor: pointer;
    background: linear-gradient(90deg, #5F9CEE 0%, #63B0EE 100%);
    border-radius: 8px;
    text-align: center;
    margin-top: 10px;
    color: white;
    height: 66px;
    font-weight: 600;
    font-size: 16px;
`

// #toFix: should be renamed to CardTitle
const ProposalCategoryTitle = styled(ResearchTitle)`
    font-size: 14px;
`

const ProposalCategoryDescription = styled(ResearchDescription)`
    font-size: 13px;
`

const ProposalDetailsWrapper = styled(MainContentWrapper)`
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

// Wrapper that wraps the "Proposal Details" and "Comments" navigation while Proposal details are displayed
const ProposalDetailsTab = styled.div`
    width: 100%;
    height: 60px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const ProposalDetailsButtonsWrapper = styled.div`
    width: 80%;
    background-color: transparent;
`

const ProposalDetailsButton = styled.button`
    width: 50%;
    height: 100%;
    background-color: transparent;
    border-top-style: none;
    border-left-style: none;
    border-right-style: none;
    border-bottom-style: solid;
    border-bottom-color: ${ props => props.tabSelected === true ? 'blue' : 'grey'};
    border-bottom-width: ${ props => props.tabSelected === true ? '3px' : '1px'};
    outline: none;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
` // Width and color change depending on whether it's clicked or not.

const ProposalDetailsDataPoint = styled.div`
    width: 80%;
    height: auto;
    background-color: transparent;
    margin-top: 10px;
    margin-bottom 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const DividingLine = styled.div`
    height: 1px;
    background-color: black;
    width: 80%;
`
const ProposalDetailTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: black;
    margin-bottom: 20px;
    background-color: transparent;
    color: grey;
`

const ProposalDetailDescription = styled.div`
    font-size: 14px;
    background-color: transparent;
    margin-bottom: 20px;
    line-height: 20px;
    color: grey;
`

// Proposal Details Component is a component that will display a tabular navigation at the top
// and the Proposal Details

class ProposalDetailComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Empty for now
            tabSelected: 'Details'
        }
    }

    render(){
        return (
            <ProposalWrapper>
                <ProposalDetailsDataPoint>
                    <ProposalDetailTitle>
                        Hypothesis
                    </ProposalDetailTitle>
                    <ProposalDetailDescription>
                    A hypothesis is a suggested solution for an unexplained occurrence that does not fit into current accepted scientific theory. The basic idea of a hypothesis is that there is no pre-determined outcome. For a hypothesis to be termed a scientific hypothesis, it has to be something that can be supported or refuted through carefully crafted experimentation or observation. This is called falsifiability and testability, an idea that was advanced in the mid-20th century a British philosopher named Karl Popper, according to the Encyclopedia Britannica.
                    </ProposalDetailDescription>
                </ProposalDetailsDataPoint>
                <DividingLine />
                <ProposalDetailsDataPoint>
                    <ProposalDetailTitle>
                        Rationale
                    </ProposalDetailTitle>
                    <ProposalDetailDescription>
                        A hypothesis is usually written in the form of an if/then statement, according to the University of California. This statement gives a possibility (if) and explains what may happen because of the possibility (then). The statement could also include "may."                    
                    </ProposalDetailDescription>
                </ProposalDetailsDataPoint>
                <DividingLine />
                <ProposalDetailsDataPoint>
                    <ProposalDetailTitle>
                        Preliminary Data
                    </ProposalDetailTitle>
                    <ProposalDetailDescription>
                        Notice that all of the statements, above, are testable. The primary trait of a hypothesis is that something can be tested and that those tests can be replicated, according to Midwestern State University.An example of untestable statement is, "All people fall in love at least once." The definition of love is subjective. Also, it would be impossible to poll every human about their love life. An untestable statement can be reworded to make it testable, though. For example, the previous statement could be changed to, "If love is an important emotion, some may believe that everyone should fall in love at least once." With this statement, the researcher can poll a group of people to see how many believe people should fall in love at least once.                    
                    </ProposalDetailDescription>
                </ProposalDetailsDataPoint>
                <DividingLine />
                <ProposalDetailsDataPoint>
                    <ProposalDetailTitle>
                        Research Plan
                    </ProposalDetailTitle>
                    <ProposalDetailDescription>
                        A null hypothesis is the name given to a hypothesis that is possibly false or has no effect. Often, during a test, the scientist will study another branch of the idea that may work, which is called an alternative hypothesis, according to the University of California, Berkeley. 
                    </ProposalDetailDescription>
                </ProposalDetailsDataPoint>
            </ProposalWrapper>
        )
    }
}

const ProposalDetailRightWrapper = styled(SubmitProposalWrapper)``

const ProposalDetailCTAWrapper = styled.div`
    margin-top: 30px;
    height: auto;
    width: 100%;
    border-radius: 5px;
    border-color: #5F9CEE;
    border-style: solid;
    border-width: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;
    min-width: 170px;
`

const ProposalDetailCTATitle = styled.h1`
    font-size: 20px;
    color: black;
    font-weight: 600;
    text-align: center;
    margin-top: 0px;
`

const ProposalDetailCTAButton = styled.button`
    width: 75%;
    height: 40px;
    background-color: #5F9CEE;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-weight: 600;
    font-size: 14px;
`

const ProposalDetailCTAButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
`

const ProposalDetailCTASmallButton = styled(ProposalDetailCTAButton)`
    width: 40%;
`

const ProposalDetailCTASmallWhiteButton = styled(ProposalDetailCTASmallButton)`
    width: 40%;
    background-color: white;
    color: #5F9CEE;
    border-color: #5F9CEE;
    border-style: solid;
    border-width: 2px;
`

class ProposalDetailRightComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Emtpy for now
        }
    }

    render(){
        return (
            <ProposalDetailRightWrapper>
                <ProposalDetailCTAWrapper>
                    <ProposalDetailCTATitle>
                        Contact Researcher
                    </ProposalDetailCTATitle>
                    <ProposalDetailCTAButton>
                        Contact
                    </ProposalDetailCTAButton>
                </ProposalDetailCTAWrapper>
                <ProposalDetailCTAWrapper>
                    <ProposalDetailCTATitle>
                        Is this viable?
                    </ProposalDetailCTATitle>
                    <ProposalDetailCTAButtonWrapper>
                        <ProposalDetailCTASmallWhiteButton>
                            No
                        </ProposalDetailCTASmallWhiteButton>
                        <ProposalDetailCTASmallButton>
                            Yes
                        </ProposalDetailCTASmallButton>
                    </ProposalDetailCTAButtonWrapper>
                </ProposalDetailCTAWrapper>
            </ProposalDetailRightWrapper>
        )
    }
}



class SubmitProposalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Empty for now
            proposalCategory: 'Assessment',
        } 
    }

    handleProposalClick = (category) => {
        this.setState({
            proposalCategory: category
        })
    }

    render(){
        const proposalCategoriesArray = this.props.props
        return (
            <SubmitProposalWrapper> 
                <SubmitProposalHeader>
                <RightComponentTitle ComponentTheme={ComponentTheme} > Submit Proposal </RightComponentTitle>
                <RightComponentSubTitle ComponentTheme={ComponentTheme} > We'll make sure to get it to the right people. </RightComponentSubTitle>
                </SubmitProposalHeader>
                { proposalCategoriesArray.length > 0 &&
                proposalCategoriesArray.map((proposalCategoryObj, index) => {
                    return <ProposalTypesWrapper key={index} onClick={(event) => this.handleProposalClick(proposalCategoryObj.proposalType)}>
                            <ProposalCategoryCard proposalType={proposalCategoryObj.proposalType} stateType={this.state.proposalCategory} >
                                <ProposalCategoryLeftIconWrapper>
                                    <OuterCircle>
                                        <InnerCircle proposalType={proposalCategoryObj.proposalType}  stateType={this.state.proposalCategory}/>
                                    </OuterCircle>
                                </ProposalCategoryLeftIconWrapper>
                                <ProposalRightDescriptionWrapper>
                                    <ProposalCategoryTitle>
                                        {proposalCategoryObj.proposalType}
                                    </ProposalCategoryTitle>
                                    <ProposalCategoryDescription>
                                        {proposalCategoryObj.proposalDescription}
                                    </ProposalCategoryDescription>
                                </ProposalRightDescriptionWrapper>
                            </ProposalCategoryCard>
                        </ProposalTypesWrapper>
                
                })
                }
                <SubmitProposalButton> Get Started </SubmitProposalButton>
            </SubmitProposalWrapper>

        )
    }
}

class CovidComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rfpArray: [
                {
                    researcherName: 'Goutem Kouley',
                    researcherUniversity: 'Harvard University',
                    researchTitle: 'Diagnostic tool leveraging electrochemical waves to detect liposomes',
                    researchSummary: 'The research hypotheis is that presence of minute quantities of chloramine can be detected from absorption of specific mid-IR radiation in the water (using a laser/LED and photodetector assembly). This is because at a specific wavelength (details in the main proposal) Chloramine has more than 95% absorption, while water hasless than 5% absorption of IR light.',
                    researchLikes: 13,
                    researchComments: 6
                },
                {
                    researcherName: 'Kevin Leland',
                    researcherUniversity: 'MIT',
                    researchTitle: 'Vaccine to kill COVID-19 Virus',
                    researchSummary: 'The research hypotheis is that presence of minute quantities of chloramine can be detected from absorption of specific mid-IR radiation in the water (using a laser/LED and photodetector assembly). This is because at a specific wavelength (details in the main proposal) Chloramine has more than 95% absorption, while water hasless than 5% absorption of IR light.',
                    researchLikes: 13,
                    researchComments: 6
                },
            ],
            userResearchSelection: '',
            pageSelecteed: '',
            pageDisplay: 'ProposalList', // Alternative 'ProposalDetails'. Based on this string, the correct
            tabSelected: 'Details',
            proposalCategories: [
                {
                    proposalType: 'Assessment',
                    proposalDescription: 'Commercial or at-home diagnostics and devices for detecting COVID-19'
                },
                {
                    proposalType: 'Intervention',
                    proposalDescription: 'New or repurposed therapies or devices for the prevention and/or treatment of COVID-19'
                },                {
                    proposalType: 'Monitoring',
                    proposalDescription: 'Devices or methods for monitoring patient health in the hospital or home setting'
                },
            ],
            // More to come later
        }
    }

    // Toggles between the view of all the RFP proposals and a detailed view of the RFP-related information.
    togglePageDisplay = () => {
        console.log('Button clicked')
        this.setState({
            pageDisplay: 'ProposalList' === this.state.pageDisplay ? 'ProposalDetails' : 'ProposalList'
        })
    }

    // tabSelected state probably needs to be moved within child component in order to prevent unnecessary re-rendering of the whole component
    handleTabSelection = (tabSelected) => {
        this.setState({
            tabSelected: tabSelected
        })
    }


    // #toDo: what happens when there is no cards to show? 
    // #toDo: need more specific re-rendering when the page is being displayed
    render() {
        console.log('Page display toggled to', this.state.pageDisplay)
        return (
            <CovidComponentPageWrapper>
                {/* ComponentHeader is here just to make the CovidComponent presentable */}
                <ComponentHeader ComponentTheme={ComponentTheme} >
                    <HeaderNavigationBar>
                        <HeaderLogo> 
                            HALO 
                            </HeaderLogo>
                    </HeaderNavigationBar>
                    <HeaderMainText>
                        <HeaderMainTextTitle>
                            COVID-19
                        </HeaderMainTextTitle>
                        <HeaderSecondaryText> 
                            Collaborate with industry and fellow scientists to address the COVID-19 Pandemic 
                        </HeaderSecondaryText>
                    </HeaderMainText>
                </ComponentHeader>
                <ComponentMainContent ComponentTheme={ComponentTheme} >
                    <ProposalLeftWrapper ComponentTheme={ComponentTheme}>
                        {
                            this.state.pageDisplay === 'ProposalList' 
                            && 
                            <MainContentWrapper ComponentTheme={ComponentTheme}>
                                <Title  ComponentTheme={ComponentTheme}> 
                                Browse Current proposals 
                                </Title>
                                <SubTitle  ComponentTheme={ComponentTheme}> 
                                    We've listed here COVID-19-related research proposed by scientists from around the globe.
                                </SubTitle>
                                {
                                    this.state.rfpArray.length > 0 &&
                                    this.state.rfpArray.map((proposalObj, index) => {
                                        return <ProposalCardComponent props={proposalObj} key={index} togglePageDisplay={this.togglePageDisplay} />  
                                    })
                                }
                            </MainContentWrapper> 
                        }
                        {
                            this.state.pageDisplay === 'ProposalDetails' 
                            &&
                            <ProposalDetailsWrapper ComponentTheme={ComponentTheme}>
                                <ProposalDetailsTab>
                                    <ProposalDetailsButtonsWrapper>
                                        <ProposalDetailsButton 
                                        tabSelected={this.state.tabSelected === 'Details' ? true : false} 
                                        onClick={() => this.handleTabSelection('Details')}
                                        >
                                            Details
                                        </ProposalDetailsButton>
                                        <ProposalDetailsButton 
                                        tabSelected={this.state.tabSelected === 'Details' ? false : true} 
                                        onClick={() => this.handleTabSelection('Discussion')}
                                        >
                                            Discussion
                                        </ProposalDetailsButton>
                                    </ProposalDetailsButtonsWrapper>
                                </ProposalDetailsTab>
                                <ProposalDetailComponent />
                            </ProposalDetailsWrapper> 
                        }
                    </ProposalLeftWrapper>
                    <RightContainerWrapper ComponentTheme={ComponentTheme}>
                       { this.state.pageDisplay === 'ProposalList' &&
                       <SubmitProposalComponent props={this.state.proposalCategories}  />
                       }
                       { this.state.pageDisplay === 'ProposalDetails' &&
                       <ProposalDetailRightComponent />
                       }
                       
                    </RightContainerWrapper>
                </ComponentMainContent>
            </CovidComponentPageWrapper>

        )
    }
}

export default CovidComponent;