import { AlertDialog, Input, FlatList } from 'native-base'
import { TouchableOpacity, View, Text, Alert, Button } from 'react-native'
import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { styles } from './StyleSheet'

interface Player {
    id: string
    name: string
    score: number
}

export default function FrontPage() {

    const randomId = uuidv4();

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => setIsOpen(false)

    const cancelRef = useRef(null)

    const [value, setValue] = useState("");

    const scrollEnabled: boolean = (false)

    const [players, setPlayers] = useState<Player[]>([])

    const [newPlayer, setNewPlayer] = useState<string>('')

    const addPlayer = () => {
        if (newPlayer !== '') {
            setPlayers([...players, { id: randomId, name: newPlayer, score: 0 }])
            setNewPlayer('')
            onClose()
        }
    }


    const handleDelete = (itemId: string) => {
        const updatedPlayers = players.filter(item => item.id !== itemId)
        setPlayers(updatedPlayers)
    }

    const handleEdit = (itemId: string, newScore: number, item: any) => {

        let updatedScore = players.find(player => player.id === itemId)?.score + newScore;
      
        if (updatedScore > 50) {
          Alert.alert(
            'Pisteet yli 50, palautetaan 25 pisteeseen.'
          )
          updatedScore = 25
        }
      
        const updatedPlayers = players.map(player => {
          if (player.id === itemId) {
            return { ...player, score: updatedScore }
          } else {
            return player
          }
        })
      
        setPlayers(updatedPlayers)
      
        if (updatedScore === 50) {
            const winningPlayer = players.find(player => player.id === itemId);
            Alert.alert(
                `Pelaaja ${winningPlayer?.name} voitti pelin!`
            )
        }
        
      }


    const renderItem = ({ item }: { item: Player }) => (
        <View style={styles.statBoxName}>
            <View style={styles.buttonColumn}>
            <TouchableOpacity
                    style={styles.statBoxName}
                    activeOpacity={0.2}
                    onPress={() => {
                        Alert.prompt(
                            'Pisteet',
                            `Kuinka monta pistettä ${item.name} sai tällä heitolla?`,
                            (text: string) => {
                                const newScore = Number(text);
                                if (!isNaN(newScore) && newScore <= 12) {
                                    handleEdit(item.id, newScore);
                                } else if (!isNaN(newScore)) {
                                    Alert.alert(
                                        'Suurin mahdollinen pistemäärä on 12.'
                                    );
                                } else {
                                    Alert.alert(
                                        'Pisteiden tulee olla numero.'
                                    );
                                }
                            },
                            undefined,
                            '',
                            'numeric'
                        );
                    }}
                > 
                    <View style={styles.deleteColumn} />
                    <View style={styles.playerColumn}>
                        <Text style={styles.statText}>{item.name}</Text>
                    </View>
                    <View style={styles.scoreColumn}>
                        <Text style={styles.statText}>{item.score}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.deleteColumn}>
                <TouchableOpacity onPress={() =>
                    Alert.alert(
                        'Poista pelaaja',
                        `Haluatko varmasti poistaa pelaajan ${item.name}?`,
                        [
                            { text: 'Peruuta', style: 'cancel' },
                            { text: 'Poista', onPress: () => handleDelete(item.id) },
                        ]
                    )
                }>
                    <Text style={styles.statTextDelete}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    return (
        <View style={styles.parentView}>
            <View style={styles.viewBottom}>
                <View style={styles.statBoxName}>
                    <FlatList
                        scrollEnabled={scrollEnabled}
                        ListHeaderComponent={() =>
                            <View style={styles.statBoxName}>
                                <View style={styles.deleteColumn} />
                                <View style={styles.playerColumn}>
                                    <Text style={styles.statHeader}>Pelaajat</Text>
                                </View>
                                <View style={styles.scoreColumn}>
                                    <Text style={styles.statHeader}>Pisteet</Text>
                                </View>
                                <View style={styles.deleteColumn} />
                            </View>
                        }
                        data={players}
                        renderItem={renderItem}
                        numColumns={1}
                    />
                </View>

                <View style={styles.viewBottomButton}>
                    <TouchableOpacity style={styles.addPlayerButton} onPress={() => setIsOpen(!isOpen)}>
                        <Text style={styles.addPlayerButtonText}>
                            Lisää pelaaja
                        </Text>
                    </TouchableOpacity>
                </View>

                <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                    <AlertDialog.Content>
                        <AlertDialog.Header style={styles.alertDialogHeader}>
                            <Text style={styles.alertDialogHeaderText}>
                                Lisää pelaaja
                            </Text>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <Input variant="outline" placeholder="Kirjoita nimi" size="2xl" onChangeText={setNewPlayer}
                                maxLength={8} />
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <TouchableOpacity ref={cancelRef} onPress={onClose} style={styles.alertDialogButton}>
                                <Text style={styles.alertDialogText}>Peruuta</Text>
                            </TouchableOpacity>

                            <TouchableOpacity ref={cancelRef} style={styles.alertDialogButton} onPress={addPlayer}
                                disabled={players.length >= 10}>
                                <Text style={styles.alertDialogText}>Lisää</Text>
                            </TouchableOpacity>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
                </AlertDialog>
            </View>
        </View>
    )
}

