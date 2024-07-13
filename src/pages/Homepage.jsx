import { Box, Heading, Image, Text } from "@chakra-ui/react";

import note from "../assets/note.png"
export default function Homepage() {

    return <Box padding={8}>
        <Image mt={55} position={"absolute"} right={5} w={500} src={note} />
        <Heading mt={16} textAlign={"start"} size={"4xl"}>Noter</Heading>
        <Text mt={8} maxW={"50%"}textAlign="justify">Welcome to Noter, your ultimate note-taking companion designed to streamline and enhance your productivity. Noter is more than just a digital notebook; it's a versatile tool crafted to adapt seamlessly to your lifestyle, whether you're a student, professional, or creative individual.

            At its core, Noter offers a user-friendly interface that prioritizes simplicity without compromising functionality. Capture your thoughts effortlessly with intuitive note creation and organization features. Categorize notes with customizable tags and folders to keep everything tidy and accessible.

            Noter goes beyond basic text entry; it supports multimedia integration, allowing you to embed images, audio clips, and even sketches directly into your notes. This flexibility enables richer, more dynamic content creation, ideal for brainstorming sessions, project management, or journaling.

            Sync your notes across devices in real-time, ensuring you never miss a detail, whether you're on your desktop, tablet, or smartphone. Your data is securely stored in the cloud, backed by robust encryption protocols to safeguard your privacy and peace of mind.

            With collaborative features, Noter empowers teamwork by facilitating shared notebooks and real-time editing capabilities. Whether you're collaborating on a project or sharing study notes, collaboration in Noter is seamless and efficient.

            Join the Noter community today and experience the power of organized creativity. Simplify your life, amplify your productivity, and unleash your potential with Noter – where notes become ideas, and ideas become reality.</Text>


    </Box>
}