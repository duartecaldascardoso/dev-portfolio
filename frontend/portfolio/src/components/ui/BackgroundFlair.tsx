
import { Box } from '@chakra-ui/react';

export const BackgroundFlair = () => {
    return (
        <Box position="absolute" inset={0} overflow="hidden" pointerEvents="none" zIndex={0}>

            <Box
                position="absolute"
                top="-10%"
                left="-10%"
                width="600px"
                height="600px"
                bg="brand.500"
                opacity="0.12"
                filter="blur(140px)"
                zIndex="0"
                pointerEvents="none"
                borderRadius="full"
            />

            <Box
                position="absolute"
                top="-5%"
                right="-5%"
                width="400px"
                height="400px"
                bg="brand.300"
                opacity="0.10"
                filter="blur(120px)"
                zIndex="0"
                pointerEvents="none"
                borderRadius="full"
            />

            <Box
                position="absolute"
                top="40%"
                right="-10%"
                width="500px"
                height="500px"
                bg="brand.400"
                opacity="0.10"
                filter="blur(140px)"
                zIndex="0"
                pointerEvents="none"
                borderRadius="full"
            />

            <Box
                position="absolute"
                top="50%"
                left="-5%"
                width="450px"
                height="450px"
                bg="brand.600"
                opacity="0.08"
                filter="blur(130px)"
                zIndex="0"
                pointerEvents="none"
                borderRadius="full"
            />

            <Box
                position="absolute"
                bottom="-10%"
                left="10%"
                width="500px"
                height="500px"
                bg="brand.600"
                opacity="0.12"
                filter="blur(140px)"
                zIndex="0"
                pointerEvents="none"
                borderRadius="full"
            />

            <Box
                position="absolute"
                bottom="5%"
                right="10%"
                width="550px"
                height="550px"
                bg="brand.500"
                opacity="0.10"
                filter="blur(140px)"
                zIndex="0"
                pointerEvents="none"
                borderRadius="full"
            />
        </Box>
    );
};
