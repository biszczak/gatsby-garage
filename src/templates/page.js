import React from "react";
import { BlockRendererProvider, BlockRenderer, getStyles, getClasses } from "@webdeveducation/wp-block-tools";

const Page = (props) => {
    console.log("PAGE PROPS: ", props)
    return (
        <div>
            <BlockRendererProvider 
                allBlocks={props.pageContext.blocks} 
                renderComponent = {(block) => {
                    console.log("RENDER COMPONENT: ", block);
                    switch (block.name) {
                        case "core/media-text":
                            const content = <BlockRenderer blocks={block.innerBlocks}/>;
                            return (
                                <div 
                                    key={block.id} 
                                    style={getStyles(block)} 
                                    className={getClasses(block)}>
                                    <div>
                                        this will be an image
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            );
                    
                        default:
                            break;
                    }
                }}
            />;
        </div>
    )
};

export default Page;