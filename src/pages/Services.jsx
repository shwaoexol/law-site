import { Box, Container, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import { Link, NavLink } from 'react-router-dom';

const services = [
  { title: "Уголовные дела", text: "В соответствии со статьями Уголовного кодекса..." },
  { title: "Уголовно - исполнительное право", text: "Каждый человек, даже приговоренный к лишению свободы..." },
  { title: "Корпоративное право", text: "Когда между акционерами какой-либо организации..." },
  { title: "Недвижимость", text: "Именно поэтому для совершения сделки..." },
  { title: "Таможенные споры", text: "Как правило, таможенные споры возникают..." },
  { title: "Административное право", text: "Если верить обратиться к хорошему адвокату..." },
  { title: "Дорожно-транспортные происшествия", text: "Ущерб от случившихся ДТП бывает различным..." },
  { title: "Жилищные споры", text: "В соответствии со статьей 40 Конституции..." },
  { title: "Защита прав потребителей", text: "Каждый человек хотя бы один раз сталкивался..." },
  { title: "Кредитные споры", text: "Что представляет собой кредит? Заем денег..." },
  { title: "Наследственные дела", text: "Наследство зачастую является ценой..." },
  { title: "Семейные споры", text: "Время от времени между родственниками..." }
];

const Services = () => {
  return (
    <>
        <Box bg="#f6f6f6" py={16}>
          <Container maxW="1140px">
            <Heading mb={8} fontFamily="Playfair Display" fontWeight="500">
              Услуги
            </Heading>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
              {services.map((service, i) => (
                <Flex 
                  key={i}
                  p={6}
                  bg="white"
                  border="1px solid #d6d6d6"
                  borderRadius="md"
                  justify="space-between"
                  align="flex-start"
                  transition="all .3s"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "lg"
                  }}
                >
                  <Box maxW="90%">
                    <Heading size="sm" color="#243a5a" mb={2}>
                      {service.title}
                    </Heading>

                    <Text fontSize="sm" color="gray.600" mb={2}>
                      {service.text}
                    </Text>

                    <Link as={NavLink} to="/contacts" fontSize="sm" color="#243a5a" textDecoration="undrline">
                      Получить
                    </Link>
                  </Box>
                </Flex>
              ))}
            </Grid>
          </Container>
        </Box>
    </>
  )
}

export default Services