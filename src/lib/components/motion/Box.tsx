import { chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

// type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

const MotionBox: React.FC<any> = motion(chakra.div);

export default MotionBox;
