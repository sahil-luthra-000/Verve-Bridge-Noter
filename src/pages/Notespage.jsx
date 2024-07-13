import { Box, Grid, IconButton, Button, Input, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  createNotes, getNotes } from "../Redux/notes/note.actions";
import NoteCard from "../components/Notespage/NoteCards/NoteCard";
import { IoMdAdd } from "react-icons/io";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export default function NotesPage() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Initialize isOpen and onClose
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Fetch notes on component mount
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  // Function to handle creating a new note
  const handleCreateNote = () => {
    dispatch(createNotes({ title, body }));
    onClose(); // Close the modal after creating note
    setTitle(""); // Clear title input after creation
    setBody(""); // Clear body textarea after creation
  };

  return (
    <Box mt={20} padding={8} marginLeft={20}>
      <Grid
        gap={10}
        w="90%"
        margin="auto"
        gridTemplateColumns="repeat(4, 1fr)"
      >
        {data?.map((note) => (
          <NoteCard key={note._id} {...note} />
        ))}
      </Grid>

      <IconButton
        boxShadow={
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;"
        }
        position="fixed"
        w="80px"
        h="80px"
        borderRadius="50%"
        bg="red"
        bottom="20px"
        right="20px"
        onClick={onOpen} // Open the modal on click
        icon={<IoMdAdd />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={title}
              placeholder="Please enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              mt={8}
              value={body}
              placeholder="Please enter description"
              onChange={(e) => setBody(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreateNote}>
              Create
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
