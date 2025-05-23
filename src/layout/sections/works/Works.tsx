import {SectionTitle} from '../../../components/SectionTitle.ts';
import {TabMenu, TabsStatusType} from './tabMenu/TabMenu.tsx';
import {FlexWrapper} from '../../../components/FlexWrapper.ts';
import {Work} from './work/Work.tsx';
import socialImg from '../../../assets/images/proj-1.webp'
import timer from '../../../assets/images/proj-2.webp'
import {Container} from '../../../components/Container.ts';
import * as React from "react";
import {S} from './Works_Styles.ts';
import {useState} from "react";
import {AnimatePresence, motion} from 'framer-motion';


const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },

]

const worksData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: "spa",
        id: 1,
    },
    {
        title: 'Timer',
        src: timer,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: "react",
        id: 2,
    },
]

export const Works: React.FC = () => {

    const [filterStatus, setFilterStatus] = useState("all")
    let filteredWorks = worksData
    if (filterStatus === "landing") {
        filteredWorks = worksData.filter(el => el.type === "landing")
    }
    if (filterStatus === "react") {
        filteredWorks = worksData.filter(el => el.type === "react")
    }
    if (filterStatus === "spa") {
        filteredWorks = worksData.filter(el => el.type === "spa")
    }

    const changeFilterStatus = (value: "all" | "landing" | "react" | "spa") => {
        setFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu
                    tabsItems={tabsItems}
                    changeFilterStatus={changeFilterStatus}
                    filterStatus={filterStatus}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <AnimatePresence>
                        {filteredWorks.map((el) => {
                            return (
                                <motion.div style={{
                                    width: "330px",
                                    flexGrow: 1,
                                    maxWidth: "540px",
                                }}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            layout
                                            key={el.id}
                                >
                                    <Work
                                        key={el.id}
                                        title={el.title}
                                        text={el.text}
                                        src={el.src}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

