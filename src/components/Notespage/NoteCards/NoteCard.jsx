import { Button, Card, CardBody, Flex, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNotes, updateNotes } from "../../../Redux/notes/note.actions"; // Adjust the import if necessary
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import "./style.css"
import { useState } from "react";
export default function NoteCard({ title, body, user, _id }) {
    const dispatch = useDispatch();

    const { loading, error, data } = useSelector((state) => state.noteReducer);
    const { isOpen, onOpen, onClose } = useDisclosure(); // Initialize isOpen and onClose
    const [tempTitle, setTitle] = useState(title);
    const [tempBody, setBody] = useState(body);
    const updateNote =() => {
        dispatch(updateNotes(_id,{title:tempTitle,body:tempBody}))
        onClose()
    };
    const handleDeleteNote = () => {
        dispatch(deleteNotes(_id)); // Call deleteNotes action with _id parameter
    };

    return (
        <Card className="card" w={200} h={200}>
            <CardBody>
                <VStack>
                    <Heading>{title}</Heading>
                    <Text>{body}</Text>
                    <Flex gap={2}>
                        <Button onClick={onOpen}>Update</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={tempTitle}
              placeholder="Please enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              mt={8}
              value={tempBody}
              placeholder="Please enter description"
              onChange={(e) => setBody(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={updateNote}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                        <Button onClick={handleDeleteNote}>Delete</Button>
                    </Flex>
                </VStack>
            </CardBody>
        </Card>
    );
}
