import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./";

const meta : Meta<typeof Text> = {
    component: Text,
    title: 'Components/Text',
    tags: ['autodocs'],
    parameters:{
        layout:"centered"
    }

}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {
    args:{
        children:"Text is here!!!",
        as:"h5"
    }
} 