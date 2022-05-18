import { ComponentMeta, ComponentStory } from '@storybook/react';

import ContentBlock from './index';

export default {
    title: 'ContentBlock',
    component: ContentBlock,
} as ComponentMeta<typeof ContentBlock>;

export const Examples: ComponentStory<typeof ContentBlock> = () => (
    <div>
        <ContentBlock>
            This text is within a block.
        </ContentBlock>
        <ContentBlock>
            This text is within a second block. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </ContentBlock>
        <ContentBlock>
            This text is within a third block. This block has no margin at the bottom.
        </ContentBlock>
    </div>
);
