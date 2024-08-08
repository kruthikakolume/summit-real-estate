import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import config from '../../src/aws-exports';
import { generateClient } from 'aws-amplify/api';
const client = generateClient();
import Storage from 'aws-amplify';
import { StorageManager } from '@aws-amplify/ui-react-storage';
import { uploadData } from 'aws-amplify/storage';
import Toast from 'components/Toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EmailIcon from '@mui/icons-material/Email';
import { FormEvent, useEffect, useReducer, useState } from 'react';
import TextField from '../CTA/components/TextField';
import styles from '../CTA/CTA.module.scss';
import { createFoundation } from 'src/graphql/mutations';
import { v4 } from 'uuid';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
      light: '#fff',
      dark: '#fff',
    },
  },
});

type FormState = {
  title: string;
  subheading: string;
  company: string;
  email: string;
  description: string;
};

const initState: FormState = {
  title: '',
  subheading: '',
  company: '',
  email: '',
  description: '',
};

type Action = {
  payload: string;
  name: string;
};

const formReducer = (state: FormState, action: Action): FormState => {
  return {
    ...state,
    [action.name]: action.payload,
  };
};

const AdminAPI = () => {
  const [title, setTitle] = useState('');
  const [subheading, setSubheading] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState<any>();
  const id = v4();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(file);
    const key = 'images/' + id + '.' + file.type;
    // upload the image to S3
    // const uploadedImage = await Storage.put(file.name, file);
    // console.log(uploadedImage);
    // submit the GraphQL query
    const newService = await client.graphql({
      query: createFoundation,
      variables: {
        input: {
          title,
          subheading,
          desc,
          image: {
            // use the image's region and bucket (from aws-exports) as well as the key from the uploaded image
            region: config.aws_user_files_s3_bucket_region,
            bucket: config.aws_user_files_s3_bucket,
            key: key,
          },
        },
      },
    });
    console.log(newService);
  };

  return (
    <section id="admin" className={styles['cta']}>
      <div className={styles['cta-content']}>
        <div className={styles['cta-content-part']}>
          <h4>Add Foundation information</h4>
          <p>The pillars of Summit property services</p>
        </div>
        <ThemeProvider theme={theme}>
          <div className={styles['cta-content-part']}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} columnSpacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="title"
                    label="Title"
                    inputProps={{ maxLength: 80 }}
                    name="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="subheading"
                    label="Subheading"
                    inputProps={{ maxLength: 80, color: 'white' }}
                    name="subheading"
                    color="secondary"
                    type="text"
                    onChange={(e) => setSubheading(e.target.value)}
                    placeholder="Subheading"
                  />
                </Grid>
                <Grid item xs={12}>
                  <label>Image</label>
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => {
                      e.target.files !== null ? setFile(e.target.files[0]) : console.log('File is null');
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    color="secondary"
                    style={{ height: 'auto', color: '#fff' }}
                    id="description"
                    label="Message"
                    onChange={(e) => setDesc(e.target.value)}
                    inputProps={{
                      color: '#fff',
                    }}
                    multiline
                    minRows={2}
                    maxRows={7}
                    InputProps={{
                      required: false,
                      disableUnderline: true,
                    }}
                    name="description"
                    type="text"
                    placeholder={'Message'.toUpperCase()}
                  />
                </Grid>
              </Grid>
              <p className={styles['small']}>
                By submitting your information, you agree to the{' '}
                <Link href="/privacy-and-cookies">privacy policy</Link> and to learn more about offers and
                promotions from Summit.
              </p>
              <input className="ui-button secondary" type="submit" name="submit" value={'Submit'} />
            </form>
          </div>
        </ThemeProvider>
      </div>
    </section>
  );
};

export default AdminAPI;
