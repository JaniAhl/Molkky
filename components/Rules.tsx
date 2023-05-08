import { View, Text, Link, } from 'native-base'
import React from 'react'
import { styles } from './StyleSheet'


export default function Rules() {

    return(

    <View style={styles.parentView}>
        <View style={styles.headerView}>
            <Text style={styles.headerText}>
                Mölkyn Säännöt: 
            </Text>
        </View>
        <View style={styles.paragraphView}>
            <Text style={styles.paragrahpText}>
                • Tässä sovelluksessa pelaajien maksimimäärä on 10. {"\n"} {"\n"}
                • Mölkyssä heitetään mölkyllä (=puinen palikka) luvuilla 1–12 numeroituja puisia "keiloja", jotka on pystytetty tiiviiksi ryhmäksi 3–4 metrin etäisyydelle heittäjästä. {"\n"}{"\n"}
                • Heitto on suoritettava aina alakautta, muuten heittotapa on vapaa. Jos heittäjä kaataa yhden keilan, pistemäärä on sama kuin kaatuneen keilan numero. {"\n"}{"\n"}
                • Jos keiloja kaatuu kaksi tai enemmän, pistemäärä on sama kuin kaatuneiden keilojen lukumäärä. Mikäli keila nojaa toiseen keilaan tai mölkkyyn, 
                sen laskenta riippuu missä seurassa mölkkyä pelataan. Heiton jälkeen keilat nostetaan pystyyn sille kohdalle, johon ne ovat kaatuneet tai lentäneet. {"\n"}{"\n"}
                • Kolmesta perättäisestä ohiheitosta kilpailija putoaa pelistä ja siirtyy yleensä kirjuriksi. {"\n"} {"\n"}
                • Peli päättyy, kun ensimmäinen pelaaja saavuttaa täsmälleen 50 pistettä.
                Mikäli pistemäärä ylittää 50, pelaajan pisteet putoavat 25:een. {"\n"} {"\n"}
            </Text>
            <Text style={styles.paragrahpText}>
                Lähde: <Link href='https://fi.wikipedia.org/wiki/M%C3%B6lkky'>Wikipedia</Link>
            </Text>
        </View>

    </View>
    )
}