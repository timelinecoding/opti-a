import { Box, Button, Modal, Typography } from "@mui/material";
import { SectionTitle } from "../const/SectionTitle.tsx";
import { useState } from "react";
import ArticleCard from "../const/ArticleCard.tsx";
import ReusableImage from "../const/ReusableImage"; // Adjust the import path as necessary

export default function Article() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <Box sx={{ mt: 8 }}>
            <SectionTitle title="Featured Article" />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <ArticleCard
                    title="Agentic Optimization"
                    description="Explore insights on the art of dark design."
                    handleOpenModal={handleOpenModal}
                />
            </Box>

            <Box sx={{ mt: 4, textAlign: "center" }}>
                
            <Button
                    component="a" href="/OptiA_Article.pdf"
                    sx={{
                        backgroundColor: "#f20062",
                        color: "white",
                        px: 3,
                        py: 1.5,
                        "&:hover": {backgroundColor: "#796d0a", color: 'white'},
                    }}
                >
                    Download Article
                </Button>
            </Box>

            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#1c1f28",
                        p: 3,
                        borderRadius: 2,
                        width: "80%",
                        height: "auto",
                        maxHeight: '80vh',
                        maxWidth: '62.5vw',
                        boxShadow: 24,
                        overflowY: 'auto',
                        display: "flex",
                        flexDirection: "column",
                        // Responsive design for smaller screens
                        "@media (max-width: 600px)": {
                            maxWidth: '90vw',
                            p: 3

                        },
                    }}
                >
                    <Box sx={{ position: "sticky", top: 0, zIndex: 1 }}>
                        <Button
                            onClick={handleCloseModal}
                            sx={{ color: "#f20062", fontWeight: "bold", float: "right" }}
                        >
                            X
                        </Button>
                        <Typography variant="h5" sx={{ color: "#ffc000", fontWeight: "bold" }}>
                            Agentic Optimization
                        </Typography>
                    </Box>
                    <Box sx={{
                        mt: 2, overflowY: "auto", maxHeight: "65vh", p: 2,
                        // Responsive design for smaller screens
                        "@media (max-width: 600px)": {
                            padding: '4px',

                        },
                    }}>
                        <Typography sx={{opacity: 0.8}}>
                            <h2>Introduction</h2>
                            <p>
                                Everyone loves camping! However, knowing what to pack and balancing necessity with
                                weight limitations can be challenging.
                                Imagine you will be heading to the mountains next weekend, and you can only
                                carry <strong>10kg</strong>
                                of gear and have a <strong>150€</strong> budget to purchase everything you need.
                            </p>

                            <p>
                                You decide on a <strong>tent (60€)</strong> and a high-quality <strong>sleeping bag
                                (40€)</strong>, leaving you with <strong>50€</strong> and
                                a <strong>6.5kg</strong> carrying capacity. Now comes the tricky part: what additional
                                items should you choose to <strong>maximize value</strong> for your trip while staying
                                within your weight and budget limits?
                                <br/><br/>
                                This is a classic <strong>optimization problem</strong> – finding the best solution
                                given
                                a set of
                                constraints.
                            </p>

                            <h2>What is Optimization?</h2>
                            <p>
                                Optimization problems involve finding the best possible solution by maximizing or
                                minimizing an objective while adhering to certain constraints.
                                It consists of three main components:
                            </p>
                            <ul>
                                <li><strong>Objective function:</strong> What we are trying to maximize or minimize
                                    (e.g., maximizing
                                    value in our camping gear selection, minimizing cost, etc.)
                                </li>
                                <li><strong>Decision variables:</strong> The choices we can make (e.g., which items to
                                    choose from).
                                </li>
                                <li><strong>Constraints:</strong> The rules we must follow (e.g., weight and budget
                                    limits).
                                </li>
                            </ul>

                            <ReusableImage
                                src="/img1.png"
                                alt="Dark Design"
                            />

                            <p>
                                Optimization problems appear across various industries, from supply chain management to
                                finance, resource allocation and scheduling. However, a major challenge in optimization
                                is
                                translating real-world problems into mathematical formulations, a task typically handled
                                by
                                expert mathematicians and operations researchers. <br/><br/>
                                Given this complexity, could AI agents help automate this process? Our research project
                                explored how LLMs (Large Language Models) and AI agents could assist in extracting and
                                formulating the correct mathematical model for optimization problems.
                            </p>
                            <h2>AI Agents: What Are They?</h2>
                            <p>
                                According to an article published by IBM in July 2024, AI agents are defined as:
                            </p>

                            <p className="indented-text">
                                <i>
                                    A system or program that is capable of autonomously performing tasks on <br/>
                                    behalf of a user or another system by designing its workflow and utilizing <br/>
                                    available tools.
                                </i>
                            </p>


                            <style>
                                {`
        .indented-text {
            margin-left: 20px;
        }
        
        a {
            color: lightblue; 
            }
        

        @media (max-width: 768px) {
            .indented-text {
                margin-left: 0;
            }
        }
    `}
                            </style>
                            <p>
                                In simpler terms, AI agents act as smart assistants that can process information, make
                                decisions and execute tasks. Unlike a traditional LLM, an AI agent doesn’t just generate
                                text,
                                it can also interact with tools, retrieve data from the web, run code, and more.
                            </p>
                            <h2>Why AI Agents for Optimization?</h2>
                            <p>
                                One of the key challenges in AI-assisted optimization is accurately extracting
                                constraints,
                                decision variables, and objectives from natural language descriptions. AI agents offer
                                several advantages:
                            </p>

                            <ul>
                                <li><strong>Structured Workflow:</strong> WUnlike a single LLM, each agent handles
                                    specific tasks that
                                    contribute to solving a larger problem.
                                </li>
                                <li><strong>Prompt Engineering:</strong> Each agent can be prompted differently based on
                                    its specific
                                    task, allowing for greater flexibility, control and improved accuracy.
                                </li>
                                <li><strong>Tool Integration & Function Calling:</strong> Agents can use external tools
                                    like solvers,
                                    databases and APIs, while intelligently choosing when and which Python functions to
                                    call, optimizing the problem-solving process.
                                </li>
                            </ul>

                            <p>
                                Given these, AI agents seemed the perfect candidates for our research into automated
                                formulation of optimization problems.
                            </p>
                            <h2>The Architecture</h2>
                            <p>
                                To process a problem description and generate a structured output, we designed a modular
                                pipeline consisting of three key components:
                            </p>
                            <ul>
                                <li>Classifier: Identifies the type of optimization problem.</li>
                                <li>Formulation: Extracts the objective function, decision variables and constraints
                                    from
                                    the input.
                                </li>
                                <li>Output: Based on the user’s preference, returns either the mathematical formulation
                                    of the problem or a Python script that solves it, with an option to utilize the
                                    HiGHS
                                    solver library.
                                </li>
                            </ul>

                            <p>
                                Each module operates as its own pipeline, where multiple AI agents, each with a
                                well-defined role, collaborate to complete the overall task.
                            </p>

                            <h2>Classifier: Identifying the Problem Type</h2>
                            <p>
                                The Classifier module is responsible for analyzing the problem description and
                                categorizing
                                it into a predefined problem type. Once the type is identified, the classifier connects
                                with the
                                appropriate formulation agents to proceed with the next steps.
                            </p>

                            <ReusableImage
                                src="/Classifier.png"
                                alt="Dark Design"
                            />

                            <h3>How it works</h3>
                            <ol>
                                <li style={{marginBottom: '20px'}}><strong>User Input</strong> - The user submits the
                                    problem description through a proxy agent, which acts
                                    as an interface between the user and the system.
                                </li>
                                <li style={{marginBottom: '20px'}}><strong>Nested Group Chat</strong> - A structured
                                    conversation takes place among specialized agents.
                                    The <strong>Group Manager</strong> oversees the flow of the conversation, ensuring
                                    complete control over
                                    the order in which agents speak. The <strong>Problem Definer</strong> identifies the
                                    problem type using
                                    predefined knowledge embedded in its system prompt, while the <strong>Search
                                        Agent</strong> (RAG
                                    agent) retrieves relevant examples to support the problem type identification.
                                    The <strong>Problem Validator</strong>
                                    critiques the problem type, comparing it against the examples to ensure accuracy.
                                </li>
                                <li><strong>Classification & Routing</strong> - Once a consensus is reached on the
                                    problem type, the
                                    Classifier (A0) processes the result and forwards it to the <strong>Gateway
                                        Agent</strong>, which then
                                    connects to the appropriate formulation agents to solve the problem based on its
                                    type.
                                </li>
                            </ol>


                            <h2>Formulation: Deriving the Mathematical Model</h2>
                            <p>
                                The Formulation module is the core of our architecture as it plays a crucial role in
                                deriving
                                the correct formulation that can be solved. To build this formulation, we focus on
                                separately
                                extracting the three key components that make up an optimization problem: the objective
                                function, the decision variables, and the constraints – concepts that will likely be
                                familiar to
                                the reader by now.
                            </p>

                            <ReusableImage
                                src="/Formulator.png"
                                alt="Dark Design"
                            />

                            <h3>How it works</h3>
                            <ol>
                                <li style={{marginBottom: '20px'}}><strong>Group Chats</strong> - Extracting each of the
                                    three components (objective function, decision variables, and constraints) follows a
                                    consistent pattern:
                                    <ul>
                                        <li>First, the <strong>Search Agent</strong> (RAG agent) retrieves relevant
                                            information
                                            from its knowledge base to assist the formulation agents.
                                        </li>
                                        <li>Then, the <strong>Formulator Agent</strong> extracts the respective
                                            component from
                                            the problem description.
                                        </li>
                                        <li>Finally, the <strong>Validator Agent</strong> reviews the extracted
                                            component,
                                            ensuring its accuracy and completeness, and provides feedback to the
                                            Formulator where necessary.
                                        </li>
                                        <li>This process, overseen by the <strong>Group Manager</strong>, continues
                                            iteratively until the Formulator and Validator agree on the final
                                            extraction.
                                        </li>
                                    </ul>
                                </li>
                                <li style={{marginBottom: '20px'}}><strong>Final Formulation</strong> - Once all three
                                    components are finalized, they are sent to the <strong>Final Formulator</strong>,
                                    who combines them into a well-structured JSON formulation, ready for solving.
                                </li>
                            </ol>


                            <h2>Output: Transforming the Formulation into the Desired Format</h2>
                            <p>
                                The Output module is responsible for converting the extracted formulation into the
                                user’s
                                preferred format. Users can select from the following output options before submitting
                                the
                                problem description:
                            </p>

                            <ul>
                                <li><strong>Raw Formulation</strong>: The formulation is returned as is, without any
                                    modifications
                                </li>
                                <li><strong>Code</strong>: A Python script is generated containing the necessary code to
                                    solve the
                                    formulation.
                                </li>
                                <li><strong>Solver</strong>: A Python script is generated that integrates the HiGHS
                                    solver library for
                                    solving the formulation.
                                </li>
                            </ul>

                            <ReusableImage
                                src="/Output.png"
                                alt="Dark Design"
                            />

                            <ol>
                                <li style={{marginBottom: '20px'}}><strong>Receiving User Input</strong> – The Output
                                    Agent receives the final formulation from the
                                    Formulation module and the user’s selected output format.
                                </li>
                                <li style={{marginBottom: '20px'}}><strong>Gateway Processing</strong> – The received
                                    formulation is processed by the Gateway Agent,
                                    which connects to the appropriate agents based on the user's choice:
                                    <ul>
                                        <li><strong>Raw Formulation</strong>: The formulation is directly returned to
                                            the user without modifications.
                                        </li>
                                        <li><strong>Code and Solver</strong>: A Group Chat is initiated for further
                                            processing.
                                        </li>
                                    </ul>
                                </li>
                                <li style={{marginBottom: '20px'}}><strong>Group Chats</strong> – The Formulator Agent
                                    creates the output script and the Validator Agent
                                    reviews it for code quality and completeness. The Executor Agent then tests it in a
                                    secure
                                    Docker environment and produces a PASS/FAIL report. This process continues
                                    iteratively
                                    until the script passes the validation.
                                    <ul>
                                        <li><strong>Solver</strong> – Includes a Search Agent (RAG agent) that retrieves
                                            relevant information from the HiGHS library documentation
                                            to integrate the solver functionality into the script.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                            <br/>
                            <h2><strong>Technology Stack</strong></h2>
                            <p>To build our agentic optimization system we used the following technologies:</p>
                            <ul>
                                <li><strong>AI Foundry</strong> – Microsoft’s model management platform</li>
                                <li><strong>Autogen 2.0</strong> – Microsoft’s agent orchestration framework</li>
                                <li><strong>Azure AI Search</strong> – Vector database powering the RAG agents</li>
                                <li><strong>Models</strong> – GPT-3.5-turbo and Claude 3.7 Sonnet</li>
                            </ul>


                            <h2>Final Considerations</h2>
                            <p>Before concluding, we want to briefly highlight two crucial topics that emerged during
                                our
                                work and which raised questions we couldn’t overlook.</p>

                            <h3>LLM Capabilities</h3>
                            <p>
                                We tested GPT-3.5-turbo and Claude 3.7 Sonnet, both of which struggled to correctly
                                extract the different components of an optimization problem. While Claude 3.7 Sonnet
                                performed slightly better, the improvements were minimal, highlighting the limitations
                                of
                                current LLMs in mathematical reasoning.
                            </p>
                            <p>
                                We also observed significant differences in how the models responded to the same prompt.
                                Claude 3.7 Sonnet had the tendency to overextend its answers, which we mitigated by
                                implementing a structured code-of-conduct guide within the Claude agents’ system prompt,
                                to keep it focused.
                            </p>
                            <p>
                                Finally, while agents are effective at executing tasks and streamlining workflows, we
                                believe
                                incorporating more algorithms to assist these agents could lead to a more efficient and
                                reliable process.
                            </p>

                            <h3>Evaluation</h3>
                            <p>
                                A major challenge in developing our proof-of-concept architecture was testing and
                                assessing
                                the quality of our results. We mainly relied on qualitative metrics, but discussions
                                with
                                industry professionals emphasized the need for a more structured approach. We identified
                                the following key insights:
                            </p>

                            <ul>
                                <li><strong>No Immediate Metric</strong> – Early evaluation lacks clear metrics. Trial
                                    and error, iterative
                                    prompt engineering, and domain expertise are crucial for improvement.
                                </li>
                                <li><strong>Continuous Evaluation</strong> – Testing should begin early with simple
                                    metrics and evolve throughout development.
                                </li>
                                <li><strong>Domain Knowledge</strong> – A deeper understanding of the domain
                                    (mathematical optimization in this case) enables more precise test metrics and
                                    reduces reliance on the models' reasoning ability.
                                </li>
                                <li><strong>Isolated Testing</strong> – Each agent and component should be tested
                                    separately to identify and resolve issues before integrating them into the overall
                                    architecture.
                                </li>
                                <li><strong>Custom Evaluation</strong> – Standard evaluation tools for agent-based
                                    workflows are lacking, making tailored evaluation code essential.
                                </li>
                            </ul>

                            <h2>Conclusion</h2>
                            <p>
                                Working on this project has been an eye-opening experience, allowing us to explore the
                                intersection of mathematical optimization and AI agents. We gained firsthand insight
                                into
                                both the potential and limitations of current LLMs in handling complex mathematical
                                reasoning.

                            </p>

                            <p>
                                As a team of three final-year Applied Computer Science students, we developed this
                                project
                                over six weeks as part of our degree program. Throughout the process, we not only
                                deepened our technical knowledge but also recognized the challenges of designing and
                                evaluating AI-driven workflows. This experience has reinforced our appreciation for the
                                growing field of AI agents and their evolving role in automation, making us eager to see
                                how
                                they will evolve and shape the future.
                            </p>

                            <h2>Connect with us</h2>
                            <ul>
                                <li><a href="https://be.linkedin.com/in/smith-ayo" target="_blank">Ayodeji
                                    Alli-Smith</a></li>
                                <li><a href="https://de.linkedin.com/in/dean-terneu-134841226" target="_blank">Dean
                                    Terneu</a>
                                </li>
                                <li><a href="https://be.linkedin.com/in/ines-costa-bastos" target="_blank">Inês
                                    Bastos</a>
                                </li>
                            </ul>

                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
}
