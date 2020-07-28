import { fetchDocument } from 'tripledoc';
import { solid, schema} from 'rdf-namespaces';
// const webId = 'https://atul.solid.community/profile/card#me'

const fetchProfile = async (webId) =>  {
    const profile = await fetchDocument(webId);
    return profile.getSubject(webId);
}

const fetchInfo = async (webId) => {
    try {
        const profile  =  await fetchProfile(webId);
        return {
          name: profile.getString('http://xmlns.com/foaf/0.1/name'),
          nick: profile.getString('http://xmlns.com/foaf/0.1/nick'),
       };
    
    } catch(e){
        console.error(e);
    }
};

export const profile =  ({ id }) => 
    fetchInfo(id)
    .then((profile) => {
        return profile;
    })

export const document = async ({ id }) => {
    try {
        const profile = await await fetchProfile(id);
        const publicTypeIndexRef = profile.getRef(solid.publicTypeIndex);
        const publicTypeIndex = await fetchDocument(publicTypeIndexRef);
        const notesListEntry = publicTypeIndex.findSubject(solid.forClass, schema.TextDigitalDocument);
        if(notesListEntry === null) {
            return {
                result : 'No Documnt available for the user'
            }
        }
        const notesListRef = notesListEntry.getRef(solid.instance);
        return await fetchDocument(notesListRef);
    } catch(e){
        console.error(e);
    }
}