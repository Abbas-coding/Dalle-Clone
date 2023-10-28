import FileSaver from 'file-saver';
import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt){
    const randdomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randdomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}