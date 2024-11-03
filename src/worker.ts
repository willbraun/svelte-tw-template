import { Pipeline, pipeline, Text2TextGenerationPipeline, type PipelineType } from '@huggingface/transformers'

class Text2TextPipeline {
	static task: PipelineType = 'text2text-generation'
	static model = 'Xenova/LaMini-Flan-T5-783M'
	static instance: Promise<Text2TextGenerationPipeline> | null = null

	static async getInstance(progress_callback: () => void) {
		if (this.instance === null) {
			this.instance = pipeline(this.task, this.model, { progress_callback }) as Promise<Text2TextGenerationPipeline>
		}

		return this.instance
	}
}
