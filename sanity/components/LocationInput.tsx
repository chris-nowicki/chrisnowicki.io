import { StringInputProps, set, unset } from 'sanity'
import { Card, Flex, TextInput, Text } from '@sanity/ui'
import axios from 'axios'

// secrets namespace
import { useSecrets } from '@sanity/studio-secrets'
const namespace = 'secrets'

// icons
import { SearchIcon } from '@sanity/icons'
import { IoLocationSharp } from 'react-icons/io5'

export default function LocationInput(props: StringInputProps) {
  const { onChange, value } = props
  const { secrets } = useSecrets<any>(namespace)

  // variable to hold zip code when searching for location
  let zipCode: number

  // fetches city & state from zipcodeapi.com
  const getCityState = (event?: any) => {
    if (event.target.value.length == 5) {
      const val = Number(event.target.value)
      axios
        .get(
          `https://www.zipcodeapi.com/rest/${secrets.ZIPCODE_API_KEY}/info.json/${val}/degrees`
        )
        .then((location: any) => {
          const value = `${location.data.city}, ${location.data.state}`
          onChange(value ? set(value) : unset())
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <Flex align="center">
      <Card flex={1}>
        <TextInput
          onChange={getCityState}
          fontSize={2}
          placeholder="ZipCode"
          value={zipCode}
          icon={SearchIcon}
        />
      </Card>

      <Card flex={[1, 2, 3]} border={false} marginLeft={3}>
        <Flex align="center">
          <IoLocationSharp />
          <Card marginLeft={1}>
            <Text size={2}>{value}</Text>
          </Card>
        </Flex>
      </Card>
    </Flex>
  )
}
