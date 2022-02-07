import { Card } from '@src/views/common/Card/Card';

import aec from './aec.png'
import adaptive_beam_former from './adaptive_beam_former.png'
import echo_noise_supression from './echo_noise_supression.png'
import agc from './agc.png'
import de_reverberation from './de_reverberation.png'

// import degrees from './360_degrees.png'
import degrees from './360_degrees_new.png'
import noice_cancelation from './noice_cancelation.png'
import universal_compatibility from './universal_compatibility.png'
import high_fidelty from './high_fidelty.png'
import clarivoice_algorithms from './clarivoice_algorithms.png'

export const captureEveryWordList: Card[] = [
	{
		title: "stereo_aec",
		description: "stereo_aec_description",
		image: aec
	},
	{
		title: "adaptive_beam_former",
		description: "adaptive_beam_former_description",
		image: adaptive_beam_former
	},
	{
		title: "echo_noise_supression",
		description: "echo_noise_supression_description",
		image: echo_noise_supression
	},
	{
		title: "agc",
		description: "agc_description",
		image: agc
	},
	{
		title: "de_reverberation",
		description: "de_reverberation_description",
		image: de_reverberation
	},
];

export const powerOfHarmanList: Card[] = [
	{
		title: "360_degree",
		description: "360_degree_description",
		image: degrees
	},
	{
		title: "noise_cancelation",
		description: "noise_cancelation_description",
		image: noice_cancelation
	},
	{
		title: "universal_compatibility",
		description: "universal_compatibility_description",
		image: universal_compatibility
	},
	{
		title: "high_fidelty",
		description: "high_fidelty_description",
		image: high_fidelty
	},
	{
		title: "clarivoice_algorithms",
		description: "clarivoice_algorithms_description",
		image: clarivoice_algorithms
	},
];